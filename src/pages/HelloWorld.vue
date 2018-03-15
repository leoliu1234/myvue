<template>
  <div>
    <span>{{count}}</span>
    <br/>
    <span>{{isOdd}}</span>
    <br/>
    <a @click="add(1)">add</a>
    <br/>
    <button @click="$router.back()">Back</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({
    count: "mycount",
    isOdd: "isOdd"
  }),
  methods: mapActions({
    add: "add1"
  })
};
</script>
