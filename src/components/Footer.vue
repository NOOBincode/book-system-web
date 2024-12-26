<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <a href="#">关于我们</a>
                <a href="#">联系我们</a>
                <a href="#">隐私政策</a>
                <a href="#">服务条款</a>
            </div>
            <div class="footer-copyright">
                <p>图书管理系统. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data(){
        return{
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>
<style scoped>
.footer {
    background-color: #f8f8f8;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid #e0e0e0;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-links {
    margin-bottom: 1rem;
}
.footer-links a {
    color: #333;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 0.9rem;
}
.footer-links a:hover {
    text-decoration: underline;
}
.footer-copyright {
    font-size: 0.8rem;
    color: #777;
}
</style>