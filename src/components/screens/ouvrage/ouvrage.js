import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Loding from '../../Loding/Loding';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors, icons } from '../../constants';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { debounce } from 'lodash';


const { width } = Dimensions.get('window');
const PAGE_LIMIT = 100000;

import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to fetch all books and save to AsyncStorage
const saveBooksLocally = async () => {
    try {
        const response = await axios.get(`http://102.220.30.73/api/getBook?page=1&limit=${PAGE_LIMIT}`);
        const books = response.data.books;

        // Save books to AsyncStorage
        await AsyncStorage.setItem('books', JSON.stringify(books));
        console.log('Books saved locally');
    } catch (error) {
        console.error('Failed to save books locally:', error);
    }
};

const BookItem = React.memo(({ item }) => {
    const { isbn, titre, auteur, prixDA, masion, genre } = item;
    return (
        <View key={item._id} style={styles.listItem2}>
            <View>
                <Text style={{ marginRight: 10, textAlign: 'center', fontWeight: 'bold' }}>{isNaN(parseInt(titre)) ? titre : ''}</Text>
                <Text style={{ marginRight: 10, textAlign: 'center', fontWeight: 'bold' }}>{auteur}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', fontWeight: 'bold' }}>
                <Text style={{ marginRight: 30, fontWeight: 'bold' }}>Prix du livre: {prixDA} DA</Text>
                {isbn !== '' && <Text>ISBN: {isbn}</Text>}
            </View>
            {item.genre != "" && (
                <View>
                    <Text style={{ marginBottom: 10, marginRight: 10, textAlign: 'center' }}>{genre}</Text>
                </View>
            )}
            <View>
                <Text style={{ marginBottom: 10, fontSize: 14, marginRight: 10, textAlign: 'center', marginTop: 5 }}>{masion}</Text>
            </View>
        </View>
    );
});
const loadBooksFromLocal = async () => {
    try {
        const booksString = await AsyncStorage.getItem('books');
        if (booksString) {
            const localBooks = JSON.parse(booksString);
            setBooks(localBooks); // Set the local books to state
            console.log('Books loaded from local storage');
        }
    } catch (error) {
        console.error('Failed to load books from local storage:', error);
    }
};

export default function Ouvrage() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadBooksFromLocal(); // Load books from local storage on component mount
    }, []);
    useEffect(() => {
        getBooks(currentPage);
        saveBooksLocally(); // Save books to local storage whenever the component mounts
    }, [currentPage]);

    const getBooks = async (page) => {
        setLoading(true);
        try {
            const res = await axios.get(`http://102.220.30.73/api/getBook?page=${page}&limit=${PAGE_LIMIT}`);
            setBooks(prevBooks => [...prevBooks, ...res.data.books]);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = useCallback(debounce((value) => {
        setSearch(value);
        setCurrentPage(1); // Reset to first page on new search
    }, 300), []);

    const filteredBooks = useMemo(() => {
        if (!search) return books;
        const normalizedSearch = normalizeText(search).toLowerCase().trim();
        return books.filter(book =>
            normalizeText(book.titre).toLowerCase().includes(normalizedSearch) ||
            normalizeText(book.auteur).toLowerCase().includes(normalizedSearch)
        );
    }, [search, books]);

    const loadMoreBooks = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    function normalizeText(text) {
        const normalized = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return normalized
            .replace(/[أإءآ]/g, 'ا')
            .replace(/[ى]/g, 'ي')
            .replace(/[ؤ]/g, 'و')
            .replace(/[ة]/g, 'ه');
    }

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
                        <View style={{marginBottom:100}}></View>
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