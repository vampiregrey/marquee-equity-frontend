<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-12"><h2 class="font-weight-bold text-center">Search Company</h2></div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <input @keyup="fetchCompanyName" v-model="companyName" type="text" class="form-control" id="companyName" placeholder="Start Typing Company Name" autofocus>
            </div>
        </div>
        <div class="row py-3">
            <div class="col-md-6 offset-md-3 text-center">
                <button class="btn btn-primary" @click.prevent="saveCompanyInfo">Submit</button>
            </div>
        </div>

        <div class="row py-3">
            <div class="col-md-6 offset-md-3 text-center">
               <div id="listCompany" v-html="companyDataBox"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "CompanySearchBar",
        data(){
          return{
              companyName : '',
              processing : false,
              postingData: false,
              companyDataBox: '',
              companyArray: [],
          }
        },
        methods:{
            fetchCompanyName(){

                //check to make sure we don't overflow the api
                if (this.processing===true){
                    return;
                }

                //check if we are not sending empty string and it is greater than 1
                if (this.companyName.length <= 1){

                    // clear company name
                    this.companyDataBox = '';
                    return;
                }
                this.processing = true;

                axios({
                    method: 'get',
                    url: "http://localhost:3000/custom-search",
                    params: {
                        company : this.companyName,
                    },
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
                    this.companyDataBox = result.data;
                    this.processing = false;
                }).catch(error => {
                    this.processing = false;
                    console.log(error)
                });
            },
            saveCompanyInfo(){
                let companiesListing = document.querySelectorAll("#listCompany div");

                //check to make sure we don't overflow the api
                if (this.postingData===true){
                    return;
                }

                //Empty array data to prevent overriding
                this.companyArray = [];
                for (let i = 0; i<companiesListing.length; i++) {

                    let extractNameAndCin = companiesListing[i].id.split('/');

                    //console.log(extractNameAndCin);
                    this.companyArray[i] = {
                        "name": extractNameAndCin[1],
                        "cin": extractNameAndCin[2]
                    }
                }

                //Post data to server to process saving to database

                axios({
                    method: 'post',
                    url: "http://localhost:3000/save",
                    data: {
                        companies : this.companyArray,
                    },
                    header:{
                        "accept": "*/*",
                        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-requested-with": "XMLHttpRequest"
                    }
                }).then(() => {
                    this.$toasted.success('Data is saved to database' , {position: "top-center",
                        duration : 2500})
                    this.postingData = false;

                    //reset the search

                    this.companyDataBox = '';
                    this.companyName ='';
                }).catch(error => {
                    this.postingData = false;
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>

</style>