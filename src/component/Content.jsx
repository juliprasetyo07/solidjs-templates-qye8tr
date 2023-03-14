import { AiOutlineSearch } from 'solid-icons/ai'
import { IoOptionsOutline } from 'solid-icons/io'

export default function Content() {
  return (
    <section class="w-full ml-8 ">
      <div class="bg-white mb-11 text-graydark mt-10 flex w-[250px]
 rounded">
   <div class="my-auto scale-150 mx-3 "><AiOutlineSearch /></div>
        <p class="py-2">Search NFTs</p>
        <div class="my-auto scale-150 ml-20 right-2"><IoOptionsOutline /></div>
      </div>
      <p class="font-bold text-xl mb-3">Recently Added NFTs</p>

      <div class="grid grid-cols-3 w-3/4 mb-8">
        <a href="#" class="text-xs">
          Recommended
        </a>
        <a href="#" class="text-xs">
          New Trends
        </a>
        <a href="#" class="text-xs">
          Multi Colors
        </a>
      </div>

      <div class="grid grid-cols-3 mb-8 gap-7 w-3/4 mb-[100px]">
        <div>
          <div class="bg-orange h-[240px]  w-[190px] mb-5 rounded-xl shadow-2xl " style="background-image: url('https://source.unsplash.com/190x240?abstrac')"></div>
          <a href="#" class="font-semibold text-sm">
            Universe
          </a>
          <p class="text-xs text-graydark">Recommended</p>

        
        </div>
        <div>
          <div class="bg-orange h-[240px] w-[190px] mb-5 rounded-xl shadow-2xl " style="background-image: url('https://source.unsplash.com/190x240?detail)"></div>
          <a href="#" class="font-semibold text-sm">
            Drying stars
          </a>
          <p class="text-xs text-graydark">Recommended</p>
        </div>
        <div>
          <div class="bg-orange h-[240px]  w-[190px] mb-5 rounded-xl shadow-2xl " style="background-image: url('https://source.unsplash.com/190x240?orbit')"></div>
          <a href="#" class="font-semibold text-sm">
            Far Far Away
          </a>
          <p class="text-xs text-graydark">Recommended</p>
        </div>
      </div>

      <div class="">
        <p class="font-bold mb-3">Payment History</p>
        <ul class="grid grid-cols-4 mx-3 mb-5 text-xs font-semibold">
          <li>Recepient</li>
          <li>Date</li>
          <li>Status</li>
          <li>Amount</li>
        </ul>

        <div class="grid grid-cols-4   mb-8">
         <div class="flex"> <div class=" bg-red h-8 w-8 rounded-full mr-5"></div>
          <div>
            <p class="font-semibold text-xs">Drible PRO</p>
            <p class="text-xs font-semibold text-graydark">Subscription</p>
          </div></div>
          <p class="text-xs font-semibold">23,Jan 2021</p>

        <div class="flex  text-left">
        <p class="text-green bg-green px-2 py-1 rounded  my-auto bg-opacity-20  font-semibold text-xs">
            Success
          </p>
        </div>
          <div class="flex">$15,00 <section class="text-graydark">/Mo</section></div>
        </div>


        <div class="grid grid-cols-4  bg-white p-6 rounded-xl shadow-xl">
         <div class="flex"> <div class=" bg-black h-8 w-8 rounded-full mr-5"></div>
          <div>
            <p class="font-semibold text-xs">Netflix subscribtion</p>
            <p class="text-xs font-semibold text-graydark">Premium</p>
          </div></div>
          <p class="text-xs font-semibold">23,Jan 2021</p>

        <div class="flex">
        <p class="text-white bg-orange px-2 py-1 rounded my-auto   font-semibold text-xs">
            Pending
          </p>
        </div>
          <div class="flex">$79,00 <section class="text-graydark">/Mo</section></div>
        </div>
      </div>
    </section>
  );
}
