<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus.js';
import ListMixin from '@/mixins/ListMixin'

export default {
  components: { ListItem },
  mixins: [ListMixin]
};
</script>
