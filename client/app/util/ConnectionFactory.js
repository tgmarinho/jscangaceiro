System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            // array com uma store apenas
            const stores = ['negociacaoes'];
            // COMEÇA SEM CONEXÃO
            let connection = null;
            // VARIÁVEL QUE ARMAZENARÁ A FUNÇÃO ORIGINAL
            let close = null;

            let ConnectionFactory = class ConnectionFactory {

                constructor() {
                    throw new Error('Não é possível criar instâncias dessa classe');
                }

                static getConnection() {
                    return new Promise((resolve, reject) => {

                        const openRequest = indexedDB.open('jscangaceiro', 2);

                        if (connection) return resolve(connection);

                        openRequest.onupgradeneeded = e => {

                            // PASSA A CONEXÃO PARA O MÉTODO
                            ConnectionFactory._createStores(e.target.result);
                        };

                        openRequest.onsuccess = e => {
                            // SÓ SERÁ EXECUTADO NA PRIMEIRA VEZ QUE A CONEXÃO FOR CRIADA
                            connection = e.target.result;

                            // GUARDANDO A FUNÇÃO ORIGINAL!
                            close = connection.close.bind(connection);

                            connection.close = () => {
                                throw new Error('Você não pode fechar diretamente a conexão');
                            };
                            resolve(e.target.result);
                        };

                        openRequest.onerror = e => {
                            console.log(e.target.error);
                            reject(e.target.error.name);
                        };
                    });
                }

                // CONVENÇÃO DE MÉTODO PRIVADO
                // SÓ FAZ SENTIDO SER CHAMADO PELA 
                // PRÓPRIA CLASSE
                static _createStores(connection) {

                    stores.forEach(store => {

                        // if sem bloco, mais sucinto!

                        if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

                        connection.createObjectStore(store, { autoIncrement: true });
                    });
                }

                static closeConnection() {
                    if (connection) {
                        // CHAMANDO O CLOSE ORIGINAL!
                        close();
                    }
                }

            };

            _export('ConnectionFactory', ConnectionFactory);
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map