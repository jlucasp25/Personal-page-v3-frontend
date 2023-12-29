<script>
    import {fly} from "svelte/transition";
    import drivingSchoolImageOne from "$lib/assets/ds-1.jpg"
    import drivingSchoolImageThree from "$lib/assets/ds-3.jpg"
    import nitroLogo from "$lib/assets/nitro-logo-crop.png";
    import smartphone from "$lib/assets/smartphone.jpg";
    import business from "$lib/assets/business.jpg";


    let introCardAnimationConfig = {x: -600, duration: 2000};
    let topAnimationConfig = {y: -600, duration: 1500};
    let bottomAnimationConfig = {y: 600, duration: 2000};
    let cardOneAnimationConfig = {y: 600, delay: 1000, duration: 2000};
    let cardTwoAnimationConfig = {y: 600, delay: 2000, duration: 2000};
    let cardThreeAnimationConfig = {y: 600, delay: 3000, duration: 2000};
    let cardFourAnimationConfig = {y: 600, delay: 4000, duration: 2000};
</script>
<style lang="postcss">
    section.top {
        padding: 1.5rem;
        background: #5E71E4;
        height: 20vh;
        width: 100%;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
    }

    section.bottom {
        padding: 1.5rem;
        background: #F8F9FA;
        height: 80vh;
        width: 100%;
    }

    .nitro-card {
        margin-inline: 1.5rem;
        border-radius: 32px;
        box-shadow: 0 16px 48px rgba(0, 0, 0, .35);
        background: white;
        padding: 1rem;
    }

    .bg-nitro {
        background: #5E71E4;
        color: white;
    }

    #sv-background {
        display: none !important;
    }

    main {
        height: 100vh;
        width: 100%;
        background: #F8F9FA;
        z-index: 1;
    }

    .text-nitro {
        color: #5E71E4;
    }

</style>
<main>
    <section class="top " in:fly={topAnimationConfig}>
        <img src="{nitroLogo}" alt="Nitro" class="h-3/4 nitro-logo" in:fly={introCardAnimationConfig}/>
        <p class="font-sans text-white text-lg mt-2">
            An integrated solution for driving schools management.
        </p>
    </section>
    <section class="bottom" in:fly={bottomAnimationConfig}>
        <div class="flex flex-row">
            <div class="nitro-card w-1/3" in:fly={cardOneAnimationConfig}>
                <img class="rounded-xl" src={drivingSchoolImageOne} alt="Carta">
                <p class="font-sans text-center text-lg mt-2">
                    Access your driving school database from anywhere, anytime.
                    No need to install anything, just use your favorite browser.
                </p>
            </div>
            <div class="nitro-card w-1/3" in:fly={cardTwoAnimationConfig}>
                <img class="rounded-xl" src={business} alt="Carta">
                <p class="font-sans text-center text-lg mt-2">
                    Built from the ground up for ease of use and flexibility.
                    Using the latest technologies to provide a seamless experience for both driving schools and their
                    maintainers.
                </p>
            </div>
            <div class="nitro-card w-1/3" in:fly={cardThreeAnimationConfig}>
                <img class="rounded-xl" src={drivingSchoolImageThree} alt="Carta">
                <p class="font-sans text-center text-lg mt-2">
                    Get detailed information and analytics about your driving school, including students, transactions,
                    lessons, exams and staff operation logs.
                </p>
            </div>
            <div class="nitro-card w-1/3" in:fly={cardFourAnimationConfig}>
                <img class="rounded-xl" src={smartphone} alt="Carta">
                <p class="font-sans text-center text-lg mt-2">
                    Integrated with a mobile application for students. Students can check their lessons, exams and
                    identify themselves using a QR code.
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-center mt-5">
            <div class="nitro-card bg-nitro w-fit hover:cursor-pointer z-50"
                 on:click={() => {window.alert('Send an email to: jlucasp25@gmail.com')}}
            >
                <p class="font-sans text-center font-bold text-md">
                    Request a Demo here!
                </p>
            </div>
            <div class="nitro-card  w-fit hover:cursor-pointer z-50"
                 on:click={() => {window.alert('Send an email to: jlucasp25@gmail.com')}}
            >
                <p class="font-sans text-center font-bold text-md">
                    Powered by Django and HTMX
                </p>
            </div>
        </div>
    </section>
</main>
