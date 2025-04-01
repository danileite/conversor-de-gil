// Função de conversão
        function conversor() {
            let valorgil = prompt("Digite um valor em Gil:");
            let onegil = 0.04; // 1 Gil = R$0,04

            // Verifica se o valor inserido é válido
            if (!isNaN(valorgil) && valorgil > 0) {
                let resultado = (valorgil * onegil).toFixed(2);
                alert("R$ " + resultado);
                document.getElementById("resultado").textContent = "R$ " + resultado;
            } else {
                alert("Por favor, insira um valor válido!");
            }
        }

        // Atribui a função de conversão ao clique do botão
        document.getElementById("btnConverter").addEventListener("click", conversor);