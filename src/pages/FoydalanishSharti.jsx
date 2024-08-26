import React from 'react';
import { Link } from "react-router-dom";
import PageWrapper from '../components/PageWrapper';

const FoydalanishSharti = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base py-6 md:py-12 px-4 md:px-10 mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between pt-6 md:pt-10 mb-4 md:mb-7'>
        <div className='flex items-center mb-4 md:mb-0'>
          <Link to={'/'} className="text-[#6cd16c] text-[16px]">
            <u>Главная</u>
          </Link>
          <span className='mx-1'>/</span>
          <Link to={'/SingUp'} className="text-[#6cd16c] text-[16px]">
            <u>Зарегистрироваться</u>
          </Link>
          <span className='mx-1'>/</span>
          <p className="text-[#a5a3a3] text-sm">Пользовательское Соглашение</p>
        </div>
      </div>
      <div>
        <h3 className='text-[32px] md:text-[50px] font-bold mb-6 md:mb-10'>
          Пользовательское Соглашение
        </h3>
        <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>
          Я согласен на обработку моих персональных данных
        </p>
        <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>
          Я по собственному желанию и в своих интересах размещаю свои персональные данные на сайте ____ общества с ограниченной ответственностью ____ (ИНН_________, ОГРН__________, именуемое в дальнейшем Оператор) ), свое согласие подтверждаю. Персональная информация, предоставленная мной с целью проведения опросов, анкетирования, рекламы и маркетинговых исследований в отношении услуг, предоставляемых оператором, с целью предложения новых услуг, предлагаемых оператор обработки данных. Оператору, в том числе путем обращения ко мне непосредственно через указанные мною на данном сайте средства связи. Данное право (согласие) выше в отношении моих персональных данных предоставляется для осуществления любых действий, необходимых для достижения заявленных целей. . включая, помимо прочего, сбор, систематизацию, сбор, хранение, уточнение (обновление, изменение), использование, передачу, персонализацию, блокирование и уничтожение, которое осуществляется мной на данном веб-сайте, - означает всю информацию, отображаемую на сайт.
        </p>
        <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>
          Настоящим даю согласие на обработку Оператором персональных данных любым способом, в том числе с использованием средств автоматизации (в том числе программного обеспечения) и без использования средств автоматизации (различные материальные носители, в том числе бумажные с использованием носителей). Подтверждаю, что сообщалось, что...
        </p>
      </div>
    </div>
    </PageWrapper>
  );
};

export default FoydalanishSharti;
