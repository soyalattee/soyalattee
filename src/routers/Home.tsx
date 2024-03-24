import Header from 'components/Header';
import ProjectItem from 'components/ProjectItem';

interface IProjectItem {
  imgName: string;
  name: string;
  text: string;
  url?: string;
}

const projectData: IProjectItem[] = [
  {
    imgName: 'intellax',
    name: 'IntellaX Wallet',
    text: `업무내용 
  	-IntellaX 앱(Token Wallet) 프로토타입개발 
  	-IntellaX 앱 내 메인 페이지, 푸시알림기능 개발
  	-IntellaX 앱 내 토큰 카드결제시스템 Mercuryo  연결
  	-IntellaX 공식 사이트 운영 및 리뉴얼작업
  
  사용 기술 및 언어
  -TypeScript
  -React-native.js, React.js, Astro.js, Web3.js 
  `,
    url: 'https://wallet.intellax.io',
  },
  {
    imgName: 'bridge',
    name: 'Dapp - Bridge',
    text: `업무내용 
  -토큰의 네트워크 이동을 위한 Polygon & Ethereum Bridge페이지 개발 

사용 기술 및 언어
-TypeScript
-React.js, Web3.js, Matic.js`,
  },
  {
    imgName: 'lottery',
    name: 'Lottery Game',
    text: `NFT로 유저가 복권거래가 가능한 POE복권게임 
  MSA 설계로 Betspider 사이트와 각 게임들은 독립적으로 개발/배포 되어있다.
  
    업무내용
  -metamask지갑 혹은 그외 토큰지갑앱 연결 및 해제,  sign messagae생성
  -복권사이트 UI 전체 개발 
  
  
  사용 기술 및 언어
  -TypeScript
  -React.js, Web3.js , React-i18n.js
  `,
    url: 'https://betspider.io/lotterygame',
  },
  {
    imgName: 'neowiz',
    name: 'Neowiz Site & 채용',
    text: `네오위즈 공식 포털 전체 리뉴얼,  채용 페이지 개발 
  
  업무내용
  -MEDIA, INVESTORS, CAREERS, CONTECT US 메뉴 작업  
  -LEVER 채용 솔루션 적용(Lever API)
  
  
  사용 기술 및 언어
  
  -TypeScript
  -React.js, React-i18n.js
  `,
    url: 'https://www.neowiz.com/neowiz',
  },
  {
    imgName: 'betspider',
    name: 'Betspider Affiliate',
    text: `기업과 제휴를 위한 affiliate 관리 사이트


업무내용
-이벤트 제휴 CRUD 
-기간과 이벤트 별 수익 확인 그래프 구현 


사용 기술 및 언어
-TypeScript
-React.js, Vue.js, React-i18n.js
`,
    url: 'https://affiliate.betspider.io/official',
  },
  {
    imgName: 'moon',
    name: 'Moon Game',
    text: `소켓통신을 이용한 실시간 베팅 EOS게임  


 업무내용
-게임 UI 전체 개발 
-소켓통신 연결하여 실시간 베팅기능 구현 

사용 기술 및 언어
-TypeScript
-React.js, React-i18n.js
`,
    url: 'https://betspider.io/moon ',
  },
  {
    imgName: 'pmang',
    name: 'Pmang - 자산이동',
    text: `피망사이트의 웹보드게임(고스톱,포커 등)에서 동일유저 계정간의 자산이동 기능 추가 

 업무내용
-UI 및 API 연결 전체 작업 

사용 기술 및 언어
-TypeScript
-React.js 
`,
    url: 'https://poker.pmang.com/',
  },
  {
    imgName: 'migration',
    name: 'Web UI Migration',
    text: `JQuery로 사내데이터센터 서버에 올라가있던 웹보드게임 이벤트 UI를 AWS로 이전작업 진행 
  동시에 MSA로 변경하며 React로 수정작업 동시 진행

  업무내용
 -UI 및 API 연결 전체 작업 
 
 사용 기술 및 언어
 -TypeScript
 -React.js `,
  },
];

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="project-component">
        <p className="project-title">FE Project</p>
        <div className="project-list">
          {projectData.map((value, idx) => {
            return (
              <ProjectItem
                key={idx}
                imgName={value.imgName}
                name={value.name}
                text={value.text}
                url={value.url || ''}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
