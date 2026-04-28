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
    imagem: 'https://th.bing.com/th/id/OIP.c5awuWFDgz4f45PyiAyfUQHaJ4?w=203&h=271&c=7&r=0&o=7&pid=1.7&rm=3',
    descricao: 'Um clássico da literatura brasileira.'
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    imagem: 'data:image/webp;base64,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',
    descricao: 'Uma história poética sobre a vida.'
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    imagem: 'https://th.bing.com/th/id/OIP.g8s4n-puPV3y-F2b7ilJ_AHaJ1?w=203&h=271&c=7&r=0&o=7&pid=1.7&rm=3',
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