import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/books';

// 创建一个axios实例
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加图书
export const insertBook = (book) => {
  return api.post('', book)
    .then(response => response.data)
    .catch(error => {
      console.error('Error inserting book:', error);
      throw error;
    });
};

// 删除图书
export const deleteBook = (bookId) => {
  return api.delete(`/${bookId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting book:', error);
      throw error;
    });
};

// 根据ID查询图书
export const selectBookById = (bookId) => {
  return api.get(`/${bookId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching book by ID:', error);
      throw error;
    });
};

// 根据书名查询图书
export const selectBookByTitle = (bookName) => {
  return api.get(`/title/${bookName}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching book by title:', error);
      throw error;
    });
};

// 更新图书信息
export const updateBook = (book) => {
  return api.put('', book)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating book:', error);
      throw error;
    });
};

// 查询图书列表
export const checkBookList = () => {
  return api.get('')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching book list:', error);
      throw error;
    });
};

// 根据条件查询图书
export const selectBooksByConditions = (author, publishDate) => {
  return api.get('/search', {
    params: { author, publishDate }
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Error searching books:', error);
      throw error;
    });
};

// 批量删除图书
export const deleteBooksByIds = (bookIds) => {
  return api.delete('/ids', { data: bookIds })
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting books by IDs:', error);
      throw error;
    });
};

// 统计图书数量
export const countBooks = () => {
  return api.get('/count')
    .then(response => response.data)
    .catch(error => {
      console.error('Error counting books:', error);
      throw error;
    });
};

export default {
  insertBook,
  deleteBook,
  selectBookById,
  selectBookByTitle,
  updateBook,
  checkBookList,
  selectBooksByConditions,
  deleteBooksByIds,
  countBooks,
};
