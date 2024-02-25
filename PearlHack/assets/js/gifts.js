document.addEventListener("DOMContentLoaded", function () {
    const userResult = "ISFP"; // Replace this with the actual result from the quiz
    
    let giftData;
    if (userResult === "ISFP"){
        giftData = [
            // ISFP: 
            {name:"Art Supplies Set", image:"artSupplies.png", price: "$32.32", link: "https://www.amazon.com/Drawing-Acrylic-Crayons-Professional-Supplies/dp/B09D3R2692?th=1" },
            {name:"Handcrafted Jewelry", image:"handcraftedJewel.png", price: "$470", link: "https://www.bluenile.com/jewelry/necklaces/blue-topaz-solitaire-pendant-in-14k-white-gold-7mm-item-195509?mktg_src_id=333001039894282&ds_k=pla-2172294929882&device=c&matchtype=&cq_net=g&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQQhdCFtPueWBzrkc4mCzt3rYKsBASsJoTF6_2gSZR6p03_vVjkHM0waAou3EALw_wcB" },
            {name:"Music Album", image:"FMacRumours.png", price:"$99.03", link: "https://www.ebay.com/itm/355397837037?chn=ps&norover=1&mkevt=1&mkrid=711-166974-028196-7&mkcid=2&mkscid=101&itemid=355397837037&targetid=2259090959270&device=c&mktype=pla&googleloc=1021047&poi=&campaignid=20798443329&mkgroupid=157036611298&rlsatarget=pla-2259090959270&abcId=9345392&merchantid=223144304&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQTTnyUHohKZUQgsUe6ORIoPLyV_HMvhPC12GyZpFooWi6Z9YHfe6SAaAiQuEALw_wcB"},
            {name:"Meditation Kit", image:"meditat.png", price:"$670", link:"https://personalhour.com/products/himalaya-meditation-chair-with-back-and-leg-support-zen-decor-ideas?variant=44434701517052&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQRPGv9EcErp0J72VZJd3b8QI9EPcMZsqvksop-VYDxUjE9H-_7cj6MaAvCuEALw_wcB"},
            {name:"Photography Book", image:"photoBook.png", price:"$11.75", link:"https://www.amazon.com/How-Photographs-Christies-Collectors-Guides/dp/0714880361"}
        
        ];
    } else if (userResult === "ESFJ") {
        giftData = [
            // ESFJ:
            {name:"Personalized Mirror", image:"mirror.png", price: "$35.95", link: "https://www.amazon.com/Personalized-Name-Mirror-LED-Light/dp/B0CV63GBPS/ref=sr_1_5?crid=1RJG2X4I1UJ7X&dib=eyJ2IjoiMSJ9.mm7FsJdaWAU8OSoLAGQ2BMMCDG7lxsaT19oALCmLdMg9CAdWagA8YpB6RbWr4i3AjO93l6wr7BKfyZjWZ4V-MUzdhnqQet09PiLUbTourkmwUxCaqgcFOyqUTfkacvLwWYkxnUNQdpUGEhhtvyB0Fp-amB26GIhFum6lZdhPAYQ8OLiAagSvGrMXq06JuL0YUZk8GlaleCbSEs9F7RlFBBPfaCJ0ccNz-stOurCvwFnb4Xokqliv9kxGotbAlZAILwIrm45wkZxxsQ8BAsi2c-CuXmw3Y-ZQ_vLr8B7d7cU.kxf5k7KiMcJbYkrqlYDtvo9ppO2xlHFOfz1hMmfU5qo&dib_tag=se&keywords=personalized+mirror&qid=1708847474&s=home-garden&sprefix=personalized+mirror%2Cgarden%2C107&sr=1-5" },
            {name:"Wall Decor", image:"decor.png", price:"$12.99", link: "https://www.amazon.com/97-Decor-Eclectic-Maximalist-Contemporary/dp/B0B83WGNZY/ref=sr_1_15?crid=2CE6BLTUOWSBC&dib=eyJ2IjoiMSJ9.mX6YXstGmjs7BEfHW6Jx3jCtf3JlUnDilVjepRy8Q7L5zQbQznf1MniUa6PUNja70KjXomb8gQAbqg9t5Erjiis4CgXALbmmryWIvUl4KdQyDlZjhAqnX6KZGsMEkrT-uHhAvR8AM1Jae4EDOTL_1QCTT3CEPeYcqKe2JJV0XeZuAqPQCYo38-uJvDhWTksRk1uimMCSU1S1WV7SYUX3AWmVxsxGKD7lMyM9Fgdt3GEo-1uU0SxGRLt9xTXM5CxqNTUFlTDlnznUnbRAX-uoSAlXsQwYlZIUdmhzmMH_-uw.R_xje3xlUxtDiiOQdC6DKu3j2ub-a5iHxMfugsw-RhI&dib_tag=se&keywords=home%2Bdecor&qid=1708847538&s=home-garden&sprefix=hom%2Cgarden%2C110&sr=1-15-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1"},
            {name:"Social Games", image:"games.png", price:"$22.99", link:"https://www.amazon.com/Head-Rush-Mindfulness-Awareness-Communication/dp/B088KL8JRD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aMTfz8GX8IbxIUeT4bhX3DdISMjjDX17ZMjSw1ThxXZGMqjO7uvVKI006Gno_MNDJXxllDk0N_7O5E5ifcIAynSYJ-jDeuni34C6KzmD8eMJ6WikP4OA18QZANyzANFXqnkKYMSqledxwRilZe6bSaFxt1rs8Rqv8jQs_1h4hfx-bxn5HrYOlZa6RSQPibMllKdwmPyCEnZxcXVdRmGFRHA5XdLj_Z3MKx_SJ5uWdD4SFyL9n_fFf2FFtSzXO1KE7kEuPP9fDY18T0ips1zEVgE-GWj90_etaDB0Trx-akU.xnuplppUQBoAvJunP1U6IwlOKWok63--7bTXTgBwj2M&dib_tag=se&keywords=social+games&qid=1708847596&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"},
            {name:"Spa Products", image:"skincare.png", price:"$10.65", link:"https://www.amazon.com/Bliss-Marshmallow-Brightening-Hydrating-Cruelty/dp/B079QQR8F2/ref=sr_1_2?crid=1FW8CKDC2U02L&dib=eyJ2IjoiMSJ9.0DZM0g1q6dxJnLnfZEygCp3tTli2spk89rlusWU79x7tUlO19V4aV3-IUmOA5IWYha-5XEIWRKkVEmOGmswFp8wvqZgP9luFVf-6HDNPh-nYqwd9jj6E3xk2AD68KEX_So8gfaL4TJi44yoplfSLUzF7a_3G_fqpqPi6wK8s_QuBhv4pA2_pOkf8a8DYGt1a4M9cMCzMNiQDhAd_ojPdTuUZcrHeBv8Mo4ofXBLuoVNzKYaLmH6jQy71r3Zcpk3EUZwBiQKN6IgKmInHmp8LcUdKo_U8ffcoZjxbtE0jISw.5CO0WtiXLjjUI-ts8cJn2xAXUd9AinNpOQYeA3KMsAc&dib_tag=se&keywords=spa+products&qid=1708847648&sprefix=spa+products%2Caps%2C88&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"},
            {name:"Embroidered Guest Book", image:"guestBook.png", price:"$55", link:"https://www.amazon.com/RIFLE-PAPER-CO-Wildwood-Embroidered/dp/B0BWSKNVWN/ref=sr_1_3?crid=1Z521H61OA00Y&dib=eyJ2IjoiMSJ9.MXflNreLYbaiA-vLt7EpesXmjQATlrLcv3yUpVpAbyia3kRolpHiE7nQC_VSF6Y2UYrf3uY4CPjwRen8lzlDiyrQE3lSOMtaAYMUDK9agTZBi0Xy99AJN1V9qAOANSSTBESjFLpXqXEYzyBWqr63hLCPXBajGkpo5ug1XsQQQf28phIAfwYbcGAoS_r7nAGgQwTKxTSlg74gc5I5nZiVWJ26Uub77_RbEfF_6ZSqx7xcVGHHUXe3Vdb1F2PsYMP7FRVufZNVUN-robJEu3NO1BdZIoA7JIpymaunFtpIuIU.T9YtiS4Wkq9GB9idGk2TQw1hfpIPlkNo_1fMhrcL58o&dib_tag=se&keywords=scrapbook&qid=1708847745&sprefix=scrapbook%2Caps%2C92&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"}
        ];
    }

    const giftGrid = document.getElementById("giftGrid");

    giftData.forEach((gift) => {
        const giftItem = document.createElement("div");
        giftItem.classList.add("gift-item");

        const img = document.createElement("img");
        img.src="../assets/images/" + gift.image;
        img.alt = gift.name;

        const name = document.createElement("p");
        name.textContent = gift.name;

        const price = document.createElement("p");
        price.textContent = "Price: " + gift.price;

        const link = document.createElement("a");
        link.href = gift.link;
        link.textContent = "Get it now";

        giftItem.appendChild(img);
        giftItem.appendChild(name);
        giftItem.appendChild(price);
        giftItem.appendChild(link);

        giftGrid.appendChild(giftItem);
    });
});