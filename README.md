# Web- ja hybriditeknologiat mobiiliohjelmoinnissa - viikko tehtävät
 
## Viikko 1
Tässä tehtävässä luodaan sovellus, joka laskee sykealueet liikuntaa varten käyttäjän iän perusteella. Sovellus käyttää seuraavia kaavoja laskemiseen:<br/>
<br/>Ala-arvo: (220−ikä)×0.65<br/>
Yläarvo: (220−ikä)×0.85<br/>
<br/>Käyttöliittymässä käyttäjä syöttää iän, ja laskuri näyttää sykerajat, kun "Calculate" -painiketta painetaan.

## Viikko 2
Tässä tehtävässä luodaan uusi Expo-projekti, jossa on yksinkertainen käyttöliittymä, joka käyttää Modal- ja Pressable-komponentteja. Modal-ikkuna avautuu, kun käyttäjä painaa tekstiä "Show modal message", ja ikkunan sisältö voidaan sulkea painamalla "Close" tai Androidilla laitteiston takaisin-painikkeella.

## Viikko 3
Tässä tehtävässä luotiin yksinkertainen sovellus käyttäen Stack-navigointia ja React Native Paper -kirjastoa, jossa käyttäjä voi siirtyä kotinäytöltä toiselle näytölle. Sovelluksessa toteutettiin mukautettu sovelluspalkki, joka näyttää navigointipainikkeita tilanteen mukaan: jos käyttäjä voi palata takaisin (SecondPage), näytetään takaisin-painike, muuten kotinäytöllä (FirstPage) nuolipainike siirtymiseen toiselle näytölle.

## Viikko 4
Tässä tehtävässä luotiin yksinkertainen Todo-sovellus, jossa käyttäjä voi hallita tehtävälistaa. Sovelluksessa käyttäjä voi lisätä uusia tehtäviä, merkitä tehtäviä suoritetuiksi tai poistetuiksi ja tallentaa tehtävät puhelimen muistiin käyttäen AsyncStoragea. Tehtävän tilaa voi muuttaa painamalla sitä tehtävälistassa.

## Viikko 5
Tässä tehtävässä luodaan sovellus, joka näyttää kartan käyttäjän sijainnin perusteella. Käyttäjä voi lisätä useita markkereita karttaan pitkäpainalluksella. Sovellus ei tallenna markkereita pysyvästi. Karttakomponentti toteutetaan käyttäen React Native Maps -kirjastoa.

## Viikko 6
Tässä viikkotehtävässä luodaan yksinkertainen mobiilisovellus, joka hakee tietoja julkisesta API:sta ja näyttää ne käyttäjälle. Sovelluksessa käytetään PokéAPI-rajapintaa Pokémon-tietojen hakemiseen, ja se toteutetaan React Native -ympäristössä.

## Viikko 7
Tässä tehtävässä toteutetaan yksinkertainen Todo-lista-sovellus käyttäen `useReducer`-hookia tilanhallintaan. Sovelluksessa käyttäjä voi lisätä uusia tehtäviä tekstikentän ja "Save"-painikkeen avulla, ja poistaa tehtäviä painamalla tehtävälistan rivejä. Tehtävät esitetään `FlatList`-komponentin avulla, ja tiedot (tehtävälista) säilytetään muistissa `useReducer`-hookin avulla. Sovellus ei tallenna tehtäviä pysyvästi.