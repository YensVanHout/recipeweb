<script setup lang="ts">
const PH_RECIPE = {
  Title: "Chili con carne",
  Ingredients: [
    "1 middelgrote ui",
    "1½ teen knoflook",
    "½ el zonnebloemolie",
    "250 g rundergehakt",
    "1 tl paprikapoeder",
    "1 tl gemalen komijn",
    "1 tl gedroogde oregano",
    "½ tl uienpoeder",
    "½ tl gemalen kaneel",
    "1 rode paprika",
    "200 g zwarte bonen in blik",
    "200 g kidneybonen in blik",
    "400 g gepelde tomaten in blik",
    "1 el chipotlepeper in adobosaus in pot",
    "100 ml water",
    "½ kippenbouillonblokje",
    "25 g pure chocolade 70%",
    "½ tl donkere basterdsuiker",
    "1 middelgrote ui",
  ],
  Steps: [
    "Snipper de uien en snijd de knoflook fijn. Verhit de olie in een hapjespan en bak het gehakt met de specerijen en eventueel zout 5-6 min. op middelhoog tot hoog vuur bruin. Bak het vlees goed aan door het wat langer aan één kant aan te bakken en af en toe een beetje aan te drukken. Het vlees hoeft niet overal even gaar te zijn. De bruinere stukjes zorgen voor meer smaak.",
    "Maak de paprika’s schoon en snijd in stukjes van ca. 1 cm. ",
    "Voeg de ui en paprika toe en bak 3 min. op middelhoog vuur mee. Voeg de knoflook toe en bak 2 min. mee. Roer regelmatig.",
    "Doe ondertussen alle bonen in een vergiet en spoel onder koud stromend water. Laat goed uitlekken.",
    "Voeg de tomaten, chipotle en het water toe en verkruimel het bouillonblokje erboven. Druk met een houten lepel de tomaten in stukjes. Voeg de bonen, chocola en suiker toe, breng aan de kook en laat op laag vuur 90 min. met de deksel op de pan stoven. Roer af en toe. Breng de chili op smaak met peper en eventueel zout.",
  ],
  Tags: ["spicy", "easy"],
  Image: File,
};
</script>
<template>
  <div class="content w-1/2 mx-auto">
    <h2 class="text-5xl my-6 text-center">{{ PH_RECIPE.Title }}</h2>
    <div class="image">
      <img
        class="my-6"
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div>
    <div class="recipe grid grid-cols-2">
      <div class="ingredients col-span-1 mx-auto">
        <h2 class="text-4xl mb-6">Ingredients:</h2>
        <ul class="list-disc">
          <li class="text-xl mb-2" v-for="ingredient in PH_RECIPE.Ingredients">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="steps col-span-1 mx-auto">
        <h2 class="text-4xl mb-6">Steps:</h2>
        <ol class="list-decimal">
          <li class="text-xl pb-2" v-for="step in PH_RECIPE.Steps">
            {{ step }}
          </li>
        </ol>
      </div>
      <div class="tags flex col-span-2 justify-center">
        <p
          class="text-xl bg-blue-500 m-4 px-4 py-2 rounded-full"
          v-for="tag in PH_RECIPE.Tags"
        >
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
