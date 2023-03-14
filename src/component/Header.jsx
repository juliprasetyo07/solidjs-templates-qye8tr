import { BiRegularMessageDetail } from 'solid-icons/bi';
import { IoNotificationsOutline } from 'solid-icons/io';
import { FaBrandsBitcoin } from 'solid-icons/fa';
import { SiEthereum } from 'solid-icons/si'

export default function Header() {
  return (
    <section class="w-[800px]  h-screen">
      <div>
        <div class="flex w-full bg-blue relative">
          <div class="absolute top-5 right-8">
            <button class="bg-white rounded-xl shadow-xl m-1 p-3">
              <BiRegularMessageDetail />
            </button>
            <button class="bg-white rounded-xl shadow-xl m-1 p-3">
              <IoNotificationsOutline />
            </button>
            <button
              class="bg-white rounded-xl shadow-xl ml-8 w-[40px] h-[40px]"
              style="background-image: url('https://source.unsplash.com/40x40?profil')"
            >
              .
            </button>
          </div>
        </div>
      </div>

      <div class="absolute right-2 top-32">
        <div class="mb-11">
          <p class="font-bold text-xl mb-3">My Wallets</p>
          <p class="text-xs text-graydark mb-8">Recommended</p>
          <div
            class="w-[400px] h-[200px] bg-orange rounded-2xl"
            style="background-image: url('https://source.unsplash.com/400x200?credit')"
          ></div>
        </div>

        <div class="mb-4">
          <p class="font-bold text-xl mb-3">My Wallets</p>

          <div
            class="w-[400px] h-[200px] bg-orange rounded-2xl"
            style="background-image: url('https://source.unsplash.com/400x200?dollar')"
          ></div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white bg-opacity-75 text-center rounded-xl w-full py-7 shadow-2xl">
            <p class="mx-auto text-xs font-bold">BTC wallet</p>

            <div class="flex">
              <div class="flex mx-auto font-bold">
                4.434953 <section class="text-graydark">ETH</section>
              </div>
            </div>
            
            <div class="flex">
              <div class="text-orange mx-auto">
                <FaBrandsBitcoin />
              </div>
            </div>
          </div>
        
          <div class="bg-white bg-opacity-75 text-center rounded-xl w-full py-7 shadow-2xl">
            <p class="mx-auto text-xs font-bold">Ethereum wallet</p>

            <div class="flex">
              <div class="flex mx-auto font-bold">
                4.434953 <section class="text-graydark">ETH</section>
              </div>
            </div>
            
            <div class="flex">
              <div class="text-orange mx-auto">
              <SiEthereum />
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </section>
  );
}
