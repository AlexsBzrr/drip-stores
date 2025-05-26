interface IinformationsCardItem {
  title: string;
  link: string;
}

const InformationsCard: IinformationsCardItem[] = [
  {
    title: "Sobre DripStore",
    link: "#",
  },
  {
    title: "Segurança",
    link: "#",
  },
  {
    title: "Wishlist",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Trabalhe conosco",
    link: "#",
  },
  {
    title: "Meus Pedidos",
    link: "1",
  },
];

const CategoryCard: IinformationsCardItem[] = [
  {
    title: "Camisetas",
    link: "1",
  },
  {
    title: "Calças",
    link: "1",
  },
  {
    title: "Bonés",
    link: "1",
  },
  {
    title: "Headphones",
    link: "1",
  },
  {
    title: "Tênis",
    link: "1",
  },
];

const ContactCard: IinformationsCardItem[] = [
  {
    title: `Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161 (85) 3051-3411`,
    link: "#",
  },
];

const Informations = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      <div className="col-span-1 text-white text-base w-36 pt-2">
        <h2 className="text-lg font-semibold pb-4">Informação</h2>
        <ul className="text-white text-base font-normal leading-9">
          {InformationsCard.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 text-white text-base w-36 pt-2">
        <h2 className="text-lg font-semibold pb-4">Categorias</h2>
        <ul className="text-white text-base font-normal leading-9">
          {CategoryCard.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full col-span-2 md:col-span-1 text-white text-base md:w-36 pt-2">
        <h2 className="text-lg font-semibold pb-4">Contato</h2>
        <ul className="text-white text-base font-normal leading-9">
          {ContactCard.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Informations;
