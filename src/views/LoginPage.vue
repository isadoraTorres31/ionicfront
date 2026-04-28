<template>
  <ion-page>
    <ion-content class="ion-padding">

      <div class="container">

        <!-- 🧠 Título -->
        <h1>Login</h1>
        <p>Entre para acessar seus livros</p>

        <!-- 📧 Campo Email -->
        <ion-item>
          <ion-input
            v-model="email"
            label="E-mail"
            label-placement="floating"
            type="email"
          ></ion-input>
        </ion-item>

        <!-- 🔑 Campo Senha -->
        <ion-item>
          <ion-input
            v-model="senha"
            label="Senha"
            label-placement="floating"
            type="password"
          ></ion-input>
        </ion-item>

        <!-- 🔘 Botão -->
        <ion-button expand="block" @click="login">
          Entrar
        </ion-button>

        <!-- 🔗 Links -->
        <div class="links">
          <ion-button fill="clear" router-link="/cadastro">
            Criar conta
          </ion-button>

               <ion-button @click="router.push('/recusenha')" expand="block" fill="outline" class="ion-margin-top">Recuperar Senha</ion-button>
        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
// 📦 imports
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/vue'

// 🔁 router
const router = useRouter()

// 📌 estados (dados)
const email = ref('')
const senha = ref('')

// 🔐 função de login
function login() {

  // ✅ validação (primeira coisa que roda)
  if (!email.value || !senha.value) {
    alert('Preencha todos os campos')
    return
  }

  // 🔑 login fake
  if (email.value === 'admin@gmail.com' && senha.value === '123') {
    router.push('/home')
  } else {
    alert('E-mail ou senha inválidos')
  }

}
</script>

<style scoped>
.container {
  margin-top: 80px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
}

p {
  color: gray;
  margin-bottom: 20px;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>