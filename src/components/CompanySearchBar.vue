<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-12"><h2 class="font-weight-bold text-center">Search Company</h2></div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <input type="text" class="form-control" id="companyName" placeholder="Start Typing Company Name" autofocus>
            </div>
        </div>
        <div class="row py-3">
            <div class="col-md-6 offset-md-3 text-center">
                <button class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompanySearchBar"
    }
</script>

<style scoped>

</style>