<template>
  <transition>
    <div
      v-if="showModel"
      class="sidebar"
    >
      <form>
        <h1>Add marker</h1>
        <button @click.prevent="showModel = false">Close</button>
        <label>
          Name
          <input >
        </label>
        <button @click.prevent>Save</button>
      </form>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
} from 'vue';

const props = defineProps<{
  modelValue: boolean,
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const showModel = computed({
  get() {
    return props.modelValue;
  },
  set(show: boolean) {
    emit('update:modelValue', show);
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 6rem;
  right: 0;
  width: 30rem;
  height: calc(100% - 6rem);
  background-color: var(--bg-primary);
  transition: transform 0.3s ease-in-out;
  z-index: 5;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}

form {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  button {
    background-color: var(--btn-primary);
    border-radius: 2.4rem;
    border-color: var(--bg-primary);
    border-style: hidden;
    width:fit-content;
    height: auto;
    color: var(--text-secondary);
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
      background-color: var(--btn-secondary)
    }
    &:active {
      background-color: var(--btn-secondary);
      box-shadow: 0 3px 5px 0;
      box-shadow: var(--btn-secondary);
    }
  }
}
</style>