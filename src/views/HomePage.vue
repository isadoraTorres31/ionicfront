<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Meus Livros</ion-title>
        <ion-button expand="block" router-link="/login">
  Ir para Login
</ion-button>
<ion-button expand="block" router-link="/cadastro">
  Ir para cadastro
</ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- 🔍 Barra de busca -->
      <ion-searchbar
        v-model="search"
        placeholder="Buscar livro..."
      ></ion-searchbar>

      <!-- 📚 Lista de livros -->
      <ion-list>
        <ion-card v-for="livro in livrosFiltrados" :key="livro.id">

          <!-- 📷 Imagem -->
          <img :src="livro.imagem" />

          <ion-card-header>
            <ion-card-title>{{ livro.titulo }}</ion-card-title>
            <ion-card-subtitle>{{ livro.autor }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>

            <!-- ❤️ Botão favorito -->
            <ion-button
              fill="clear"
              @click="toggleFavorito(livro)"
            >
              <ion-icon
                :icon="favoritos.includes(livro) ? heart : heartOutline"
                color="danger"
              ></ion-icon>
            </ion-button>

            <!-- 🔎 Ver detalhes -->
            <ion-button
              expand="block"
              @click="irParaDetalhes(livro)"
            >
              Ver detalhes
            </ion-button>

          </ion-card-content>
        </ion-card>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/vue'

import { heart, heartOutline } from 'ionicons/icons'

const router = useRouter()

// 🔍 busca
const search = ref('')

// 📚 dados mockados
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

// ❤️ favoritos
const favoritos = ref([])

function toggleFavorito(livro) {
  if (favoritos.value.includes(livro)) {
    favoritos.value = favoritos.value.filter(l => l !== livro)
  } else {
    favoritos.value.push(livro)
  }
}

// 🔎 filtro
const livrosFiltrados = computed(() => {
  return livros.value.filter(livro =>
    livro.titulo.toLowerCase().includes(search.value.toLowerCase())
  )
})

// 🔁 navegação
function irParaDetalhes(livro) {
  router.push({
    name: 'Detalhes',
    params: { id: livro.id }
  })
}
</script>