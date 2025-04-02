<?php
header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Permite apenas métodos específicos
header("Access-Control-Allow-Headers: Content-Type"); // Permite cabeçalhos específicos
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Carregar PHPMailer via Composer
require_once 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Função para sanitizar inputs e evitar XSS
    function sanitizeInput($data) {
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }

    $name = sanitizeInput($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $academyName = sanitizeInput($_POST['academyName'] ?? '');
    $uf = sanitizeInput($_POST['uf'] ?? '');
    $city = sanitizeInput($_POST['city'] ?? '');
    $gymUnits = sanitizeInput($_POST['gymUnits'] ?? '');
    $gymBilling = sanitizeInput($_POST['gymBilling'] ?? '');
    $ecadValue = sanitizeInput($_POST['ecadValue'] ?? '');
    $lightBilling = sanitizeInput($_POST['lightBilling'] ?? '');
    $traineeLifeSecure = sanitizeInput($_POST['traineeLifeSecure'] ?? '');
    $lawyerAccount = sanitizeInput($_POST['lawyerAccount'] ?? '');
    $economyTotals = sanitizeInput($_POST['economyTotals'] ?? '');

    // Validações
    if (empty($name) || empty($email) || empty($phone)) {
        echo json_encode(["success" => false, "message" => "Por favor, preencha todos os campos obrigatórios."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "E-mail inválido."]);
        exit;
    }

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurar o servidor SMTP
        require_once './emailCredencials.php';
        $mail->isSMTP();
        $mail->Host       = $smtpHost; // Servidor SMTP (ex: smtp.gmail.com)
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpEmail; // Seu e-mail SMTP
        $mail->Password   = $smtpPassword; // Sua senha SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // TLS ou PHPMailer::ENCRYPTION_SMTPS para SSL
        $mail->Port       = $smtpPortNumber; // Porta SMTP (465 para SSL, 587 para TLS)

        // Configurar remetente e destinatário
        $mail->setFrom($smtpEmail, $name);
        $mail->addAddress($emailReceiver); // Para onde o formulário será enviado
        $mail->addReplyTo($email, $name); // Permite responder ao remetente
        $mail->addCC('contato@diagonal.ag'); // Envia uma cópia oculta para contato@diagonal.ag
        // Conteúdo do e-mail
        $mail->isHTML(false); // Definir para texto puro
        $mail->Subject = "Novo contato de $name";
        $mail->Body    = "Nome: $name\n".
                         "Email: $email\n".
                         "Telefone: $phone\n".
                         "Nome da Academia: $academyName\n".
                         "UF: $uf\n".
                         "Cidade: $city\n".
                         "Unidades da Academia: $gymUnits\n".
                         "Faturamento da Academia: $gymBilling\n".
                         "Valor ECAD: $ecadValue\n".
                         "Conta de Luz: $lightBilling\n".
                         "Seguro de Vida do Estagiário: $traineeLifeSecure\n".
                         "Conta Jurídica: $lawyerAccount\n".
                         "Total de Economia: $economyTotals\n";

        // Enviar e-mail
        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "Mensagem enviada com sucesso!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erro ao enviar mensagem."]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método inválido."]);
}
?>
