import Header from '../Components/Header';
import HeroHow from '../Components/How/HeroHow';

export default function How() {
  return (
    <section className="h-screen bg-custom-bg bg-cover bg-center font-uncial">
      <Header />
      <div className="flex flex-col items-center gap-8 p-8">
        <HeroHow />
      </div>
    </section>
  );
}
