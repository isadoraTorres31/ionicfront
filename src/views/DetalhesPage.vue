<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" v-if="livro">

      <!-- 📷 Imagem -->
      <img :src="livro.imagem" class="imagem-livro" />

      <!-- 📖 Info -->
      <h1>{{ livro.titulo }}</h1>
      <h2>{{ livro.autor }}</h2>

      <!-- ⭐ Avaliação fake -->
      <div class="avaliacao">
        ⭐⭐⭐⭐☆
      </div>

      <!-- 📝 Descrição -->
      <p>{{ livro.descricao }}</p>

      <!-- ❤️ Favoritar -->
      <ion-button expand="block" color="danger" @click="toggleFavorito">
        <ion-icon
          slot="start"
          :icon="isFavorito ? heart : heartOutline"
        ></ion-icon>
        {{ isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }}
      </ion-button>

    </ion-content>

    <!-- Caso não encontre -->
    <ion-content v-else class="ion-padding">
      <p>Livro não encontrado.</p>
    </ion-content>

  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon
} from '@ionic/vue'

import { heart, heartOutline } from 'ionicons/icons'

// 📌 rota
const route = useRoute()
const livroId = Number(route.params.id)

// 📚 mesmos dados mockados (simples)
const livros = ref([
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    imagem: 'https://via.placeholder.com/300x200',
    descricao: 'Um clássico da literatura brasileira.'
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    imagem: 'https://via.placeholder.com/300x200',
    descricao: 'Uma história poética sobre a vida.'
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    imagem: 'https://via.placeholder.com/300x200',
    descricao: 'Distopia sobre vigilância e controle.'
  }
])

// 🔎 encontrar livro pelo ID
const livro = computed(() =>
  livros.value.find(l => l.id === livroId)
)

// ❤️ favoritos (simples, local)
const favoritos = ref([])

const isFavorito = computed(() => {
  return favoritos.value.includes(livro.value)
})

function toggleFavorito() {
  if (isFavorito.value) {
    favoritos.value = favoritos.value.filter(l => l !== livro.value)
  } else {
    favoritos.value.push(livro.value)
  }
}
</script>

<style scoped>
.imagem-livro {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
}

h1 {
  font-size: 22px;
  font-weight: bold;
}

h2 {
  font-size: 16px;
  color: gray;
  margin-bottom: 10px;
}

.avaliacao {
  margin: 10px 0;
  font-size: 18px;
}
</style>