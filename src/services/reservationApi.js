import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/reservations';

// 预设的axios实例
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 插入预约
export const insertReservation = (reservation) => {
  return api.post('', reservation)
    .then(response => response.data)
    .catch(error => {
      console.error('Error inserting reservation:', error);
      throw error;
    });
};

// 删除预约
export const deleteReservation = (reservationId) => {
  return api.delete(`/${reservationId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting reservation:', error);
      throw error;
    });
};

// 通过预约ID查询预约
export const selectReservationById = (reservationId) => {
  return api.get(`/${reservationId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching reservation by ID:', error);
      throw error;
    });
};

// 通过用户ID查询预约
export const selectReservationByUserId = (userId) => {
  return api.get(`/user/${userId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching reservation by user ID:', error);
      throw error;
    });
};

// 通过书籍ID查询预约
export const selectReservationByBookId = (bookId) => {
  return api.get(`/book/${bookId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching reservation by book ID:', error);
      throw error;
    });
};

// 查询所有预约
export const selectAllReservations = () => {
  return api.get('')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching all reservations:', error);
      throw error;
    });
};

// 锁定书籍
export const lockBookById = (bookId) => {
  return api.post(`/lock/${bookId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error locking book:', error);
      throw error;
    });
};

// 更新预约
export const updateReservation = (reservation) => {
  return api.put('', reservation)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating reservation:', error);
      throw error;
    });
};

// 通过用户ID和书籍ID查询预约
export const selectReservationsByUserIdAndBookId = (userId, bookId) => {
  return api.get(`/user/${userId}/book/${bookId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching reservations by user and book IDs:', error);
      throw error;
    });
};

// 归还书籍
export const returnBook = (reservationId) => {
  return api.post(`/return/${reservationId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error returning book:', error);
      throw error;
    });
};

export default {
  insertReservation,
  deleteReservation,
  selectReservationById,
  selectReservationByUserId,
  selectReservationByBookId,
  selectAllReservations,
  lockBookById,
  updateReservation,
  selectReservationsByUserIdAndBookId,
  returnBook,
};


