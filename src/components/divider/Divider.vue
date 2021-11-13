<template>
    <div class="divider">
            <div class="box">
                <hr>
            </div>
            <div class="box image-logo">
                <v-img
                  lazy-src="../../static/raccoon-drawing.png"
                  src="../../static/raccoon-drawing.png"
                ></v-img>
            </div>
            <div class="box">
                <hr>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Divider'
}
</script>

<style>
.divider {
  width: 100%;
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 100%;
  /* align-items: center;
  justify-content: center; */
}

.image-logo {
    align-items: center !important;
    justify-content: center !important;
    width: 150px;
    margin: 0 100px;
}

hr {
	border: 0;
	border-top: 10px solid #ff9800;
}


</style>