$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Polyfund Finance',
      tag: 'Polygon Finance Dapp.',
      detail:
        'PolyFund.finance is a next-generation yield farming protocol on the Polygon Network with lots of features such as vaults, staking, yield farming, auto decreasing emission rate, auto liquidity and referrals. This will make sure that our $FUND token stay stable over long term which will assure stable APR and earnings. We are also fully audited by the Paladin Blockchain Security.',
      link: 'https://polyfund.finance'
    },
    ordering: {
      title: 'Cryptosphere Finance',
      tag: 'BSC Finance Dapp.',
      detail: 'Cryptosphere Finance is a new generation finance dapp on Binance Smart Chain.',
      link: 'https://cryptoshere-frontend-farm-whitehat0917.vercel.app'
    },
    newrelic: {
      title: 'Mumuswap Finance',
      tag: 'Polygon Finance Dapp',
      detail: 'The mythical and magical Decentralized Exchange, Staking, and Farming Protocol on BSC. Mumuswap is run by a team of innovative and trusted developers with users safety being the 1st priority',
      link: 'https://mumuswap.finance'
    },
    roambi: {
      title: 'Doge Game',
      tag: 'Crypto Smart Contract Game',
      detail:
        'This is famous Fomo Game based on Smart Contract game logic.',
      link: 'https://fomo-52505.web.app/'
    },
    walker: {
      title: 'Krypto Gangsters NFT',
      tag: 'NFT mint site',
      detail:
        "All 10,000 Krypto Gangsters are Unique. There is no one like another. Each Gangster is randomly generated with it's own characteristics, expression and extra's.",
      link: 'https://kryptogangsters.io'
    },
    powur: {
      title: 'Ghost Marketer',
      tag: 'NFT Marketplace',
      detail:
        'GhostMarket is the most powerful cross-chain Non-Fungible Token (NFT) marketplace in the world! It sports a comprehensive selection of features wrapped in a gorgeous and intuitive user interface.',
      link: 'https://ghostmarket.io/'
    },
    mystand: {
      title: 'Strite NFT Marketplace',
      tag: 'NFT Marketplace',
      detail:
        'Main focus is to create a sustainable and user-friendly marketplace where social media influencers can create and sell their own custom non-fungible tokens.',
      link: 'https://www.strite.co/'
    },
    never: {
      title: 'Coin Racer',
      tag: 'NFT Game Site.',
      detail:
        'Coinracer is a low-poly-style blockchain-powered multiplayer racing game. CSP or CoinracerSmartPool system controls the prize pool redistribution between winners of the race. Coinracer runs on WebGL with the back-end connected to web3.js API to send transactions to smart contracts and back.',
      link: 'https://coinracer.io'
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail:
        'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".png') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
