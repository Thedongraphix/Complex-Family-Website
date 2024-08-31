<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $url = 'https://api.web3forms.com/submit';
    $postData = $_POST;
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

    $response = curl_exec($ch);
    curl_close($ch);

    $result = json_decode($response, true);

    if ($result['success']) {
        // Show success message
        echo "<div class='sent-message'>Your message has been sent. Thank you!</div>";
    } else {
        // Show error message
        echo "<div class='error-message'>There was an error submitting your form. Please try again later.</div>";
    }
}
?>
