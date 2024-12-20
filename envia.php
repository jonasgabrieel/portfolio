<?php

$nome = isset($_POST['nome']) ? addslashes($_POST['nome']) : '';
$email = isset($_POST['email']) ? addslashes($_POST['email']) : '';
$telefone = isset($_POST['telefone']) ? addslashes($_POST['telefone']) : '';
$mensagem = isset($_POST['mensagem']) ? addslashes($_POST['mensagem']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("E-mail inválido.");
}

$para = "jonasgabrieel@gmail.com";
$assunto = "Contato Cliente - Portfolio";

$corpo = "Nome: " . $nome . "\n" .
         "Email: " . $email . "\n" .
         "Telefone: " . $telefone . "\n" .
         "Mensagem: " . $mensagem . "\n";
$cabeca = "From jonasgab@academico.ufs.br" . "\n" . "Reply-to:" . $email . "\n" . "X=Mailer:PHP/" . phpversion();


if (mail($para, $assunto, $corpo, $cabeca)) {
    echo ("Enviado com sucesso!");
} else {
    echo ("Erro ao enviar form!");
}



?>