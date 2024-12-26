<template>
    <div class="reservation-list-page">
      <h1>预约列表</h1>
      <table class="reservation-table">
        <thead>
          <tr>
            <th>预约ID</th>
            <th>用户ID</th>
            <th>书籍ID</th>
            <th>预约日期</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in reservations" :key="reservation.reservation_id">
            <td>{{ reservation.reservation_id }}</td>
            <td>{{ reservation.user_id }}</td>
            <td>{{ reservation.book_id }}</td>
            <td>{{ reservation.reservation_date }}</td>
            <td>{{ reservation.status }}</td>
            <td>
              <button class="btn-return" @click="returnBook(reservation.reservation_id)">归还</button>
              <button class="btn-delete" @click="deleteReservation(reservation.reservation_id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { deleteReservation, returnBook, selectAllReservations } from "@/services/reservationApi";
  
  export default {
    name: "ReservationList",
    data() {
      return {
        reservations: [],
      };
    },
    methods: {
      async fetchReservations() {
        this.reservations = await selectAllReservations();
      },
      async deleteReservation(reservationId) {
        if (confirm("确认删除此预约记录吗？")) {
          await deleteReservation(reservationId);
          alert("预约记录删除成功");
          this.fetchReservations();
        }
      },
      async returnBook(reservationId) {
        await returnBook(reservationId);
        alert("书籍已归还");
        this.fetchReservations();
      },
    },
    mounted() {
      this.fetchReservations();
    },
  };
  </script>
  
  <style scoped>
  .reservation-list-page {
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .reservation-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  .reservation-table th,
  .reservation-table td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: center;
  }
  
  .reservation-table th {
    background-color: #f4f4f4;
  }
  
  .btn-return,
  .btn-delete {
    margin: 0 0.2rem;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-return {
    background-color: #42b983;
    color: white;
  }
  
  .btn-return:hover {
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
  