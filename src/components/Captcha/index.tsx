import React, { useEffect, useState } from 'react';
import GoCaptcha from 'go-captcha-react';
import { getCaptchaClickBasic, checkCaptchaClickBasic } from '@/services/captcha.api';
import { CaptchaCheckResponse, CaptchaResponse, CaptchaCheckData } from '@/services/common';
import { CaptchaClickBasic } from './click_basic';
import { CaptchaClickShape } from './click_shape';


function getRandomNumberBetweenZeroAndFour(): number {
  return Math.floor(Math.random() * 5); // 生成一个0到4的随机数
};
 
interface ClickData {
  image: string;
  thumb: string;
}
type CaptchaProps = {
  setResult: (boolean: boolean) => void;
  closeModal: (boolean: boolean) => void;
}
export const CaptchaValidate: React.FC<CaptchaProps> = (props) => {
  const [data, setData] = useState<ClickData>();
  const [code, setCode] = useState('');
  const selectEnum = getRandomNumberBetweenZeroAndFour();
  const getCaptcha = async () => {
    const data = await getCaptchaClickBasic() as CaptchaResponse;
    setData({
      image: data.image || '',
      thumb: data.prompt || '',
    });
    setCode(data.code || '');
  };
  useEffect(() => {
    getCaptcha();
  }, []);
  const closeEvent = () => {
    props.closeModal(true);

  };
  const refreshEvent = () => {
    getCaptcha();
  };
  const confirmEvent = (dots: Array<any>) => {
    let dotArr = [] as Array<number>;
    dots.forEach((item) => {
      dotArr.push(item.x, item.y)
    })
    checkCaptchaClickBasic({ data: dotArr.join(','), code: code } as CaptchaCheckData).then(res => {
      const data = res as CaptchaCheckResponse;
      if (data.success) {
        props.setResult(true);
      }
    }
    );
  };
  return (
    <div className="captcha-overlay" >
      {selectEnum===0&&<CaptchaClickShape setResult={props.setResult} closeModal={props.closeModal} />}
    </div>
  );
};
