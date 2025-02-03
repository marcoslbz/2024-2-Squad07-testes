// // Mock do Leaflet
// global.L = {
//     map: jest.fn(() => ({
//         setView: jest.fn(),
//         addLayer: jest.fn(),
//         on: jest.fn() // Adicionamos o método 'on' aqui
//     })),
//     tileLayer: jest.fn(() => ({
//         addTo: jest.fn()
//     })),
//     marker: jest.fn(() => ({
//         addTo: jest.fn(),
//         bindPopup: jest.fn() // Adicionamos o método 'bindPopup' aqui
//     })),
//     icon: jest.fn(),
//     popup: jest.fn(() => ({
//         setLatLng: jest.fn(),
//         setContent: jest.fn(),
//         openOn: jest.fn()
//     }))
// };

// // Mock do document e window
global.document = {
    getElementById: jest.fn(() => ({})),
    addEventListener: jest.fn()
};
// global.window = {};

// // Mock do fetch
// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve([
//             {
//                 "idUnico": "21335.53-99",
//                 "nome": "Reforma do Centro de Múltiplas Funções do Campus São Sebastião",
//                 "latitude": -15.8921200065933,
//                 "longitude": -47.7786,
//                 "situacao": "Cadastrada",
//                 "fontesDeRecurso": [
//                     {
//                         "origem": "Federal",
//                         "valorInvestimentoPrevisto": 1000000
//                     }
//                 ]
//             },
//             {
//                 "idUnico": "21339.53-04",
//                 "nome": "Substituição do sistema de impermeabilização nas edificações do Campus Brasília",
//                 "latitude": -15.7539400064479,
//                 "longitude": -47.87709,
//                 "situacao": "Cadastrada",
//                 "fontesDeRecurso": [
//                     {
//                         "origem": "Federal",
//                         "valorInvestimentoPrevisto": 1000000
//                     }
//                 ]
//             },
//             {
//                 "idUnico": "21341.53-30",
//                 "nome": "Substituição do sistema de impermeabilização nas edificações do Campus Gama",
//                 "latitude": -15.9934600067011,
//                 "longitude": -48.05417,
//                 "situacao": "Cadastrada",
//                 "fontesDeRecurso": [
//                     {
//                         "origem": "Federal",
//                         "valorInvestimentoPrevisto": 1000000
//                     }
//                 ]
//             }
//         ])
//     })
// );

// // Mock do console
// global.console = {
//     log: jest.fn(),
//     error: jest.fn(),
//     warn: jest.fn()
// };

// Importa a função formatarBRL diretamente do map.js
const { formatarBRL } = require('./map.js');

// Teste para a função formatarBRL
test('formata valores em BRL corretamente', () => {
    expect(formatarBRL(1000)).toBe('R$1.000,00');
    expect(formatarBRL(1234.56)).toBe('R$1.234,56');
    expect(formatarBRL(0)).toBe('R$0,00');
});

// // Teste para verificar se os pins são carregados corretamente
// test('carrega os pins corretamente', () => {
//     // Chama a função que carrega os pins
//     require('./map.js');

//     // Verifica se o fetch foi chamado corretamente
//     expect(global.fetch).toHaveBeenCalledWith('./obrasgov/obras_com_lat_long.json');

//     // Verifica se os marcadores foram criados corretamente
//     expect(global.L.marker).toHaveBeenCalledTimes(1); // Agora esperamos 3 chamadas
//     expect(global.L.marker).toHaveBeenCalledWith([-15.8921200065933, -47.7786], expect.anything());
// });