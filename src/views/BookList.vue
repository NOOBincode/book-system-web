<template>
    <div class="book-list-page">
      <h1>书籍列表</h1>
      <button class="btn-add" @click="navigateToAddBook">添加书籍</button>
      <table class="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>书名</th>
            <th>作者</th>
            <th>ISBN</th>
            <th>出版日期</th>
            <th>可用副本</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.book_id">
            <td>{{ book.book_id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.isbn }}</td>
            <td>{{ book.published_date }}</td>
            <td>{{ book.available_copies }}</td>
            <td>
              <button class="btn-edit" @click="editBook(book.book_id)">编辑</button>
              <button class="btn-delete" @click="deleteBook(book.book_id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { deleteBook, checkBookList } from "@/services/bookApi";
  
  export default {
    name: "BookList",
    data() {
      return {
        books: [],
      };
    },
    methods: {
      async fetchBooks() {
        this.books = await checkBookList();
      },
      async deleteBook(bookId) {
        if (confirm("确认删除此书籍吗？")) {
          await deleteBook(bookId);
          alert("书籍删除成功");
          this.fetchBooks();
        }
      },
      navigateToAddBook() {
        this.$router.push("/addBooks");
      },
      editBook(bookId) {
        this.$router.push(`/editBook/${bookId}`);
      },
    },
    mounted() {
      this.fetchBooks();
    },
  };
  </script>
  
  <style scoped>
  .book-list-page {
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .btn-add {
    display: block;
    margin: 1rem auto;
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-add:hover {
    background-color: #0056b3;
  }
  
  .book-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  .book-table th,
  .book-table td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: center;
  }
  
  .book-table th {
    background-color: #f4f4f4;
  }
  
  .btn-edit,
  .btn-delete {
    margin: 0 0.2rem;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #007bff;
    color: white;
  }
  
  .btn-edit:hover {
    background-color: #0056b3;
  }
  
  .btn-delete {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-delete:hover {
    background-color: #c82333;
  }
  </style>
  