<template>
    <div class="add-books">
      <h1>添加书籍</h1>
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
          <button type="submit" class="btn-submit">提交</button>
          <button type="button" class="btn-clear" @click="clearForm">清空</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { insertBook } from "@/services/bookApi";
  
  export default {
    name: "AddBooks",
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
      async handleSubmit() {
        try {
          await insertBook(this.book);
          alert("书籍添加成功！");
          this.clearForm();
        } catch (error) {
          console.error("添加书籍失败:", error);
          alert("书籍添加失败，请稍后重试！");
        }
      },
      clearForm() {
        this.book = {
          title: "",
          author: "",
          isbn: "",
          published_date: "",
          available_copies: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .add-books {
    text-align: center;
    padding: 2rem;
  }
  
  h1 {
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
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
    gap: 1rem;
  }
  
  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
  }
  
  .btn-submit {
    background-color: #42b983;
  }
  
  .btn-submit:hover {
    background-color: #36a374;
  }
  
  .btn-clear {
    background-color: #dc3545;
  }
  
  .btn-clear:hover {
    background-color: #c82333;
  }
  </style>
  