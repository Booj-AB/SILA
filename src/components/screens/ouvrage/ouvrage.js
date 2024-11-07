import React, { useState, useEffect, useCallback } from 'react';
import Loding from '../../Loding/Loding'
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors, icons } from '../../constants';
import { Dimensions } from 'react-native';
import axios from 'axios';

import { debounce } from 'lodash'; // Import lodash for debouncing

const { width } = Dimensions.get('window');
const scale = width / 420;
const PAGE_LIMIT = 50; // Number of books per page

const BookItem = React.memo(({ item }) => {
    const { isbn, titre, auteur, prixDA } = item;
    return (
        <View key={item._id} style={styles.listItem2}>
            <View>
                <Text style={{ marginRight: 10, textAlign: 'center', fontWeight: 'bold' }}>{isNaN(parseInt(titre))?titre:''}</Text>
                <Text style={{ marginRight: 10, textAlign: 'center', fontWeight: 'bold' }}>{auteur}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', fontWeight: 'bold' }}>
                <Text style={{ marginRight: 30, fontWeight: 'bold' }}>Prix du livre: {prixDA} DA</Text>
                {isbn !== '' && <Text>ISBN: {isbn}</Text>}
            </View>
        </View>
    );
});

export default function Ouvrage() {
    const [books, setBooks] = useState([]); // Initialize as empty array
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]); // Initialize filtered books
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [totalPages, setTotalPages] = useState(0); // Total number of pages
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        getBooks(currentPage); // Fetch books on initial load
    }, [currentPage]);

    async function getBooks(page) {
        setLoading(true);
        try {
            const res = await axios.get(`http://102.220.30.73/api/getBook?page=${page}&limit=${PAGE_LIMIT}`);
            console.log('Full Response:', res); // Log the entire response object
            console.log('Response Data:', res.data); // Log the data part specifically
            setBooks(prevBooks => [...prevBooks, ...res.data.books]); // Append new books to existing list
            setTotalPages(res.data.totalPages); // Set total pages from response
            setFilteredBooks(prevBooks => [...prevBooks, ...res.data.books]); // Initialize filtered list
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = useCallback(debounce((value) => {
        if (Array.isArray(books)) { // Ensure books is defined and is an array
            const lowerCaseSearch = value.toLowerCase();
            const filtered = books.filter(book => 
                book.titre.toLowerCase().includes(lowerCaseSearch) ||
                book.auteur.toLowerCase().includes(lowerCaseSearch)
            );
            setFilteredBooks(filtered);
        }
    }, 300), [books]); // Adjust debounce time as necessary

    useEffect(() => {
        handleSearch(search); // Call the debounced search function
    }, [search]); // Re-run search when input changes

    const loadMoreBooks = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1); // Increment page for next fetch
        }
    };

    const renderBook = ({ item }) => <BookItem item={item} />;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.Quaternary }}>
            <View style={{ flex: 1, backgroundColor: colors.Quaternary }}>
                <Header title="Ouvrage" />
                <NativeBaseProvider>
                    <View style={{ marginTop: 60 }}>
                        <View style={styles.search}>
                            <View style={styles.icon}>
                                <Image source={icons.recherche} style={{ width: 20, height: 20 }} tintColor='#ffff' />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder='Search....'
                                onChangeText={setSearch} // Update search directly
                                value={search}
                            />
                        </View>

                        <FlatList
                            data={filteredBooks} // Use filtered books for display
                            renderItem={renderBook} // Render book items
                            keyExtractor={item => item._id}
                            onEndReached={loadMoreBooks} // Load more when end is reached
                            onEndReachedThreshold={0.1} // Trigger when 10% of the end is reached
                            ListFooterComponent={loading ? <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:400}}> <Loding/> </View> : null} 
                            contentContainerStyle={styles.listItem}
                            getItemLayout={(data, index) => (
                                { length: 80, offset: 80 * index, index } // Adjust based on your item height
                            )}
                        />
                    </View>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: colors.gris,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    icon: {
        backgroundColor: colors.primary,
        padding: 15,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        color: colors.primary,
    },
    listItem: {
        paddingBottom: 20, // Add some padding for the FlatList
    },
    listItem2: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#e2e8f0',
        padding: 16,
        borderRadius: 5,
        width: '96%',
    },
});
