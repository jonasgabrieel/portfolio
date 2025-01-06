<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);

$para = "jonasgabrieel@gmail.com";
$assunto = "Contato Cliente - Portfolio";

$corpo = "Nome: " . $nome . "\n" .
         "Email: " . $email . "\n" .
         "Telefone: " . $telefone . "\n" .
         "Mensagem: " . $mensagem . "\n";
$cabeca = "From jonasgabrieel@gmail.com" . "\n" . "Reply-to:" . $email . "\n" . "X=Mailer:PHP/" . phpversion();


if (mail($para, $assunto, $corpo, $cabeca)) {
    echo ("Enviado com sucesso!");
} else {
    echo ("Erro ao enviar form!");
}
