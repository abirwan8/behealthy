import dr from "./Assets/dokter.jpg";

const Detail = () => {
    return(
        <>
        <div class="container main-news mt-5">
				<div class="row">
					<div class="col-12 mt-4">
						<h1>PENTINGNYA MENTAL IBU PASCA MELAHIRKAN</h1>
						<small>12 Desember 2022</small>
						<p class="mt-4 summary">eringkali kita abai soal kondisi mental seorang Ibu pasca persalinan. Padahal banyak sekali Ibu yang setelah melahirkan terkejut dengan perubahan yang terjadi pada hidupnya sehingga mempengaruhi kesehatan mentalnya. Seberapa penting sih mental Ibu pasca persalinan?</p>

						<img src="https://letzcricket.com/uploads/news/ZqXXlQDeCffne57g.jpg" class="mt-3 thumb"></img>
						<div class="story mt-4" style={{ textAlign: 'justify' }}>
							<p>Memiliki seorang anak adalah suatu hal yang membahagiakan bagi setiap orang tua karena hal tersebut adalah momen yang sangat ditunggu dan diharapkan. Pada situasi ini seharusnya kondisi mental ibu cukup sehat, baik, dan memiliki rasa bahagia menyambut si buah hati. Akan tetapi, ternyata saat ini kondisi mental seorang ibu bisa berbeda-beda dikarenakan oleh berbagai faktor. Kondisi mental yang kurang baik pasca persalinan ini bisa menyebabkan gangguan mental. Mari kita kenali secara dini apa itu trauma pasca persalinan dan juga melakukan upaya-upaya pencegahan supaya tidak mengalami trauma pasca persalinan.</p>
                            \
							<p>Selama masa nifas, sekitar 85% wanita mengalami beberapa jenis gangguan suasana hati. Sebagian besar gejalanya bersifat ringan dan hanya terjadi dalam jangka pendek saja. Namun, 10 - 15 % wanita mengalami gejala depresi atau kecemasan yang lebih signifikan. Dalam hal ini, ada 3 macam gangguan mental pasca persalinan, yaitu: Baby Blues, Depresi pasca persalinan, Psikosis</p>

							<p>Baby Blues <br/><br/>

                            Baby blues merupakan suatu kondisi trauma pasca persalinan yang paling ringan. Menurut kajian, 4 dari 5 wanita yang melahirkan mengalami baby blues syndrome. Karena hal ini umum terjadi, banyak orang menganggapnya sebagai pengalaman normal setelah melahirkan daripada masalah mental. Seorang ibu yang mengalami baby blues sering mengalami ketidakstabilan suasana hati, menangis, cemas atau mudah tersinggung. Gejala ini biasanya memuncak pada hari keempat atau kelima setelah melahirkan dan dapat berlangsung selama beberapa jam atau beberapa hari. Setelah itu, gejala akan hilang secara spontan dalam dua minggu setelah melahirkan.

                            Kondisi baby blues tidak ada jaminan dialami hanya pada persalinan pertama, kedua, ataupun ketiga saja. Jika persalinan anak pertama mengalami baby blues, belum tentu di persalinan berikutnya juga akan mengalami. Begitupun sebaliknya, Jika anak pertama tidak mengalami baby blues, belum tentu juga anak kedua tidak akan mengalami. Hal ini bisa disebabkan oleh berbagai faktor diantaranya adalah hormon, faktor stress, serta kehamilan yang tidak diingingkan.</p>
                            
							<p>Nah itu dia penjelasan mengenai pentingnya mental Ibu pasca persalinan. Semoga Sahabat Viva bisa menjalani fase pasca persalinan yang membahagiakan ya!</p>
						</div>
                    </div>
				</div>
		</div>
        
        <div class="section mt-4 container">
        <hr/>
				<div class="section-title">
					<p className='fs-5 fw-bold'>Baca Artikel Lainnya</p>
				</div>

				<div class="row mt-2">
					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={dr} style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Pentingnya Mental Ibu Pasca Melahirkan
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={dr} style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Pentingnya Mental Ibu Pasca Melahirkan
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">			
							<img src={dr} style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Pentingnya Mental Ibu Pasca Melahirkan
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={dr} style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Pentingnya Mental Ibu Pasca Melahirkan
						</a>
					</div>

				</div>
			</div>
        </>
    )
}

export default Detail;