import { Outlet } from "react-router-dom";
import layoutpic from '@/assets/front.jpg'; 

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-no-repeat bg-cover bg-contain"
      style={{ backgroundImage: `url(${layoutpic})`}}>
         <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-primary-foreground text-center ">
          <h1 className="text-[80px] font-normal leading-[21px] tracking-[-0.32px] font-italiana">
            Vio <span className="text-color-transition">rra</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
