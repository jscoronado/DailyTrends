<template>
    <div id="add-article">
        <HeaderTitle
            title="Añadir Noticia"
        />
        <div class="container">
            <form @submit.prevent="onFormSubmit">
                <div class="row justify-content-center">
                    <div class="col-md-6 form-group">
                        <label>Título</label>
                        <input type="text" class="form-control" v-model="article.title" required>
                    </div>
                    <div class="col-md-6 form-group">
                        <label>Enlace</label>
                        <input type="text" class="form-control" v-model="article.source" required>
                    </div>
                    <div class="col-md-6 form-group">
                        <label>Imagen</label>
                        <input type="text" class="form-control" v-model="article.image" required>
                    </div>
                    <div class="col-md-6 form-group">
                        <label>Periódico</label>
                        <input type="text" class="form-control" v-model="article.publisher" required>
                    </div>
                    <div class="col-md-12 form-group">
                        <label>Contenido</label>
                        <textarea class="form-control" v-model="article.body" required></textarea>
                    </div>
                    <div class="col-md-12 form-group">
                        <button class="btn btn-primary btn-block">Añadir Noticia</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../services/firebase';
    import HeaderTitle from "./HeaderTitle";

    export default {
        name: "ArticleCreate",
        components: {
            HeaderTitle
        },

        data() {
            return {
                article: {
                    title: '',
                    body: '',
                    source: '',
                    image: '',
                    publisher: '',
                    date: new Date().toLocaleString(),
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('news').add(this.article).then(() => {
                    alert("User successfully created!");
                    this.article.title = ''
                    this.article.body = ''
                    this.article.source = ''
                    this.article.image = ''
                    this.article.publisher = ''
                }).catch((error) => {
                    console.log(error);
                });
            },

            getDateNow: function() {
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateToday = date +' '+ time;
                return dateToday;
            }
        }
    }
</script>

<style scoped>

</style>