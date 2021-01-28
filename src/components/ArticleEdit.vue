<template>
    <div id="edit-article">
        <HeaderTitle
                title="Editar Noticias"
        />
        <div class="container">
            <form @submit.prevent="onUpdateForm">
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
                        <button class="btn btn-primary btn-block">Guardar Noticia</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {db} from "../services/firebase";
    import HeaderTitle from "./HeaderTitle";

    export default {
        name: "ArticleEdit",
        components: {
            HeaderTitle
        },

        data() {
            return {
                article: []
            }
        },
        created() {
            let dbRef = db.collection('news').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.article = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('news').doc(this.$route.params.id)
                    .update(this.article).then(() => {
                    alert("¡Noticia actualizada!");
                    this.$router.push('/listado-noticias')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>