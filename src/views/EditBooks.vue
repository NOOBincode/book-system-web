<template>
    <div class="edit-book">
      <h1>编辑书籍</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">书名</label>
          <input
            type="text"
            id="title"
            v-model="book.title"
            placeholder="请输入书名"
            required
          />
        </div>
        <div class="form-group">
          <label for="author">作者</label>
          <input
            type="text"
            id="author"
            v-model="book.author"
            placeholder="请输入作者"
            required
          />
        </div>
        <div class="form-group">
          <label for="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            v-model="book.isbn"
            placeholder="请输入ISBN编号"
          />
        </div>
        <div class="form-group">
          <label for="published_date">出版日期</label>
          <input
            type="date"
            id="published_date"
            v-model="book.published_date"
          />
        </div>
        <div class="form-group">
          <label for="available_copies">可用副本</label>
          <input
            type="number"
            id="available_copies"
            v-model="book.available_copies"
            placeholder="请输入副本数量"
          />
        </div>
        <div class="form-buttons">
          <button type="submit" class="btn-save">保存</button>
          <button type="button" class="btn-cancel" @click="cancelEdit">取消</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { selectBookById, updateBook } from "@/services/bookApi";
  
  export default {
    name: "EditBook",
    data() {
      return {
        book: {
          title: "",
          author: "",
          isbn: "",
          published_date: "",
          available_copies: "",
        },
      };
    },
    methods: {
      async fetchBookDetails() {
        const bookId = this.$route.params.bookId;
        try {
          this.book = await selectBookById(bookId);
        } catch (error) {
          console.error("获取书籍详情失败:", error);
          alert("无法加载书籍详情，请稍后重试！");
        }
      },
      async handleSubmit() {
        try {
          await updateBook(this.book);
          alert("书籍更新成功！");
          this.$router.push("/bookList");
        } catch (error) {
          console.error("书籍更新失败:", error);
          alert("书籍更新失败，请稍后重试！");
        }
      },
      cancelEdit() {
        this.$router.push("/bookList");
      },
    },
    mounted() {
      this.fetchBookDetails();
    },
  };
  </script>
  
  <style scoped>
  .edit-book {
    padding: 2rem;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 1.5rem;
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
  }
  
  .btn-save {
    background-color: #42b983;
  }
  
  .btn-save:hover {
    background-color: #36a374;
  }
  
  .btn-cancel {
    background-color: #dc3545;
  }
  
  .btn-cancel:hover {
    background-color: #c82333;
  }
  </style>
  