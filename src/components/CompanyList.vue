<template>
    <div class="container">

        <div class="row py-5">
            <div class="col-md-12"><h2 class="font-weight-bold text-center">List of Company in Database</h2></div>
        </div>

        <div class="row py-3">
            <div class="col-md-6 offset-md-3">
                <div id="listCompany" v-for="company in companies" :key="company._id">
                    <div class="py-2">{{company.name}} - {{company.cin}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CompanyList",
        data(){
            return{
                companies: []
            }
        },
        beforeMount() {
            axios({
                method: 'get',
                url: "http://localhost:3000/",
                header:{
                    "accept": "*/*",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                }
            }).then(result => {
                this.companies = result.data
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style scoped>

</style>