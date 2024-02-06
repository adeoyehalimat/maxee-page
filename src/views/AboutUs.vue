<template>
    <h1> This page tells you more about Maxee cakes </h1>
    <div>
        <h1> {{ MissionStatement }}</h1>
    </div> 
        <div> 
            <ol>
                <li v-for="(mission, index) in missions" :key="index">
                    {{ mission.subtopic }} 
                 <ul> 
                    <li> {{mission.content}}</li>
                 </ul>
               </li>
            </ol> 
        </div>
    <div>
        <h1> {{ VissionStatement }}</h1>
    </div>
        <div>  
            <ol>
                <li v-for="(vission, index) in vissions" :key="index">
                    {{ vission.subtopic }} 
                    <ul> 
                        <li> {{ vission.content }}
                        </li>
                    </ul>
                </li> 
            </ol> 
        </div>
    
        <div>   
        <ol> 
            <li v-for="(others,index) in other" :key="index" > {{others.topic}} 
                <ul> 
                    <li v-for="(bullet, bulletIndex) in others.bullets" :key="bulletIndex"> 
                        {{ bullet }}
                    </li>
                </ul>
            </li>
        </ol>
      </div>
    
</template>
<script setup>
import { ref, reactive} from 'vue';

       const MissionStatement = ref('mission statement');
       const missions = reactive([ 
        {subtopic: 'Delighting Taste Buds:',
        content: 
        'To consistently create and deliver confectioneries that captivate and delight taste buds, providing moments of joy and indulgence for our customers.'},
        {subtopic: 'Quality Craftsmanship:',
        content: 
        'Dedicated to the meticulous artistry of confectionery, our mission is to produce high-quality treats using premium ingredients, ensuring that each bite reflects our commitment to craftsmanship and flavor excellence.'},
        {subtopic: 'Sweetening Moments:',
        content:
          'Our mission is to sweeten life’s moments by offering an enticing array of confectioneries, from elegant cakes to delightful pastries, bringing people together through the shared joy of delectable treats.',
         }
       ]);
       const VissionStatement = ref('Vission Statement');
       const vissions = reactive([ 
        {subtopic: 'A Sweet Symphony of Innovation:' ,
        content:  'To be a pioneering force in the confectionery industry, continually innovating and setting trends that redefine the sweet experience, inspiring a world where creativity knows no bounds.'},
        {subtopic: 'Global Culinary Ambassador:' ,
        content:  'Aspire to be recognized globally as a culinary ambassador of sweetness, spreading the artistry of confectionery far and wide, connecting cultures through the universal language of indulgent delights.'},
        {subtopic:  'Nurturing Sweet Connections:',
        content: 'Envision a future where our confectioneries are not just treats but catalysts for building sweet connections, fostering moments of celebration, and creating lasting memories for our customers and their loved ones.' }

       ]);
      const other = reactive ([
        {
            topic: "Topic 1",
            bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
       },
        {
            topic: "Topic 2",
            bullets: ['bullet 1', 'Bullet 2', 'Bullet 3'],
        },
        {
            topic: "Topic 3",
            bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        }
      ]); 
</script>
<style scoped>

</style>