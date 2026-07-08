create table personalidades(
    id serial primary key,
    nome varchar,
    historia varchar
);

INSERT INTO personalidades(nome, historia) VALUES
('João Paulo II', 'O Papa João Paulo II, nascido Karol Józef Wojtyła, foi o líder da Igreja Católica e o primeiro pontífice a visitar a Amazônia, em julho de 1980. Em sua homenagem, a antiga Avenida 1º de Dezembro, local onde ele celebrou uma missa campal histórica para mais de 300 mil pessoas em Belém, teve seu nome alterado para Avenida João Paulo II.'),
('Almirante Barroso', 'Francisco Manoel Barroso da Silva, o Almirante Barroso, foi um destacado oficial da Armada Imperial Brasileira e Barão do Amazonas, célebre por liderar a vitória na Batalha Naval do Riachuelo durante a Guerra do Paraguai. Sua história também se conecta a Belém por sua atuação militar na província do Pará durante o período da Cabanagem.');