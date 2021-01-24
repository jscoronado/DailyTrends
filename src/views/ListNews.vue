<template>
    <div id="list-news">
        <HeaderTitle
            title="Listado de Noticias"
        />
        <div class="container">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Periódico</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="article in Articles" :key="article.key">
                    <td>{{ article.title }}</td>
                    <td>{{ article.publisher }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: article.key }}" class="btn btn-app btn-edit"><i class="fas fa-edit"></i>
                        </router-link>
                        <button @click.prevent="deleteUser(article.key)" class="btn btn-app btn-delete"><i class="far fa-trash-alt"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {db} from "../services/firebase";
    import HeaderTitle from "../components/HeaderTitle";

    export default {
        name: "ListNews",
        components: {
            HeaderTitle
        },

        data() {
            return {
                Articles: []
            }
        },
        created() {
            db.collection('news').onSnapshot((snapshotChange) => {
                this.Articles = [];
                snapshotChange.forEach((doc) => {
                    this.Articles.push({
                        key: doc.id,
                        title: doc.data().title,
                        body: doc.data().body,
                        image: doc.data().image,
                        source: doc.data().source,
                        publisher: doc.data().publisher
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
                if (window.confirm("¿Deseas eliminar esta noticia?")) {
                    db.collection("news").doc(id).delete().then(() => {
                        console.log("Document deleted!");
                    })
                        .catch((error) => {
                            console.error(error);
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>