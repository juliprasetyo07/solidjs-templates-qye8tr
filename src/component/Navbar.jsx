import { OcHome2 } from 'solid-icons/oc';
import { IoBagAddOutline } from 'solid-icons/io';
import { AiOutlineSwap } from 'solid-icons/ai';
import { BsBoxSeamFill } from 'solid-icons/bs';
import { FiHeart } from 'solid-icons/fi';
import { FaBrandsBitcoin } from 'solid-icons/fa'
import { SiEthereum } from 'solid-icons/si'
import { SiStellar } from 'solid-icons/si'
export default function Navbar() {
  return (
    <section class="bg-white relative h-screen w-1/3 border-blue border-r-2">
      <div class=" pt-3">
        <img class="scale-50" src="data:image/png;base64,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" alt=""/>
        <div class="leading-[65px] grid mt-4 ml-16">
          <a href="#" class="hover:text-blue  flex font-medium">
            <OcHome2 class="my-auto" />
            <p class="my-auto text-graydark pl-4 hover:text-blue">Dashboard</p>
          </a>

          <a href="#" class="hover:text-blue  flex font-medium">
            <IoBagAddOutline class="my-auto" />
            <p class="my-auto text-graydark pl-4 hover:text-blue">Buy & Shell</p>
          </a>

          <a href="#" class="hover:text-blue  flex font-medium">
            <AiOutlineSwap class="my-auto" />
            <p class="my-auto text-graydark pl-4 hover:text-blue">swap</p>
          </a>

          <a href="#" class="hover:text-blue  flex font-medium">
            <BsBoxSeamFill class="my-auto" />
            <p class="my-auto text-graydark pl-4 hover:text-blue">NFTs</p>
          </a>

          <a href="#" class="hover:text-blue  flex font-medium">
            <FiHeart class="my-auto" />
            <p class="my-auto text-graydark pl-4 hover:text-blue">My Favorites</p>
          </a>
        </div>
      </div>

      <div class="flex font-medium absolute bottom-32 leading-[65px]">
        <div class="ml-16">
          <p class="font-bold">Trending Coins</p>
            <a href="#" class="flex">
              <div class="my-auto scale-125 text-orange">
            <FaBrandsBitcoin />
            </div>
              <p class="pl-4 hover:text-blue">Bitcoin</p>
              </a> 

              <a href="#" class="flex">
              <div class="my-auto scale-125 text-blue">
              <SiEthereum />
            </div>
              <p class="pl-4 hover:text-blue">Ether</p>
              </a> 

            
          
              <a href="#" class="flex">
              <div class="my-auto scale-125 text-green">
            <FaBrandsBitcoin />
            </div>
              <p class="pl-4 hover:text-blue">Bitcoin Cash</p>
              </a> 

              <a href="#" class="flex">
              <div class="my-auto scale-125 text-white bg-blue rounded-full">
              <SiStellar />
            </div>
              <p class="pl-4 hover:text-blue">stellar</p>
              </a> 
        </div>


</div>
<div class="flex w-full absolute bottom-3">
  <bottom class="flex mx-auto px-8 py-3 border border-graydark border-xl rounded">
    <p class="mx-2 my-1 font-bold">Need Help?</p>
  </bottom>
      </div>


    </section>
  );
}
