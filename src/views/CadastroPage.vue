<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit.prevent="handleSubmit">
        <ion-item>
          <ion-label position="floating">Nome</ion-label>
          <ion-input v-model="form.name" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="form.email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Senha</ion-label>
          <ion-input v-model="form.password" type="password" required></ion-input>
        </ion-item>
        <ion-button type="submit" expand="block" class="ion-margin-top">Cadastrar</ion-button>
      </form>
      <div class="ion-margin-top">
        <ion-button @click="goTo('/home')" expand="block" fill="outline">Ir para Home</ion-button>
        <ion-button @click="goTo('/login')" expand="block" fill="outline" class="ion-margin-top">Ir para Login</ion-button>
        <ion-button @click="goTo('/recusenha')" expand="block" fill="outline" class="ion-margin-top">Recuperar Senha</ion-button>
        <ion-button @click="goTo('/detalhes')" expand="block" fill="outline" class="ion-margin-top">Detalhes</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue';

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: ''
});

const handleSubmit = () => {
  // Lógica para lidar com o cadastro
  console.log('Formulário enviado', form.value);
  // Aqui você pode adicionar a lógica para enviar os dados para o backend
};

const goTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
/* Estilos personalizados podem ser adicionados aqui */

</style>