<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <!-- 🔙 Botão voltar -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>

        <ion-title>Recuperar Senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <p>Digite seu e-mail para receber instruções</p>

      <form @submit.prevent="handleSubmit">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>

        <ion-button type="submit" expand="block" class="ion-margin-top">
          Enviar
        </ion-button>
      </form>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/vue';

const email = ref('');

const handleSubmit = () => {

  if (!email.value) {
    alert('Digite seu e-mail')
    return
  }

  alert('Se este e-mail existir, você receberá instruções!')

  email.value = ''
};
</script>

<style scoped>
p {
  color: gray;
  margin-bottom: 15px;
}
</style>