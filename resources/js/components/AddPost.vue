<template>
    <div>
        <h3 class="text-center">Add Post</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addPost">
                    <div class="form-group">
                        <label>Topic</label>
                        <input type="text" class="form-control" v-model="post.topic">
                    </div>
                    <div class="form-group">
                        <label>Body</label>
                        <input type="text" class="form-control" v-model="post.body">
                    </div>
                    <button type="submit" class="btn btn-primary">Add Post</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    topic: ' ',
                    body: ' '
                }
            }
        },
        methods: {
            addPost(){
                axios.post('http://localhost:8000/api/post/add', this.post)
                .then(res => (
                    this.$router.push({name: 'home'})
                ))
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
            }
        }
    }
</script>