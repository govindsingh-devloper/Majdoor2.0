import React from 'react'

function DashbordContent() {
  return (
    <div><div class="bg-zinc-100 p-4 rounded-lg shadow-lg">
  <div class="mb-4">
    <nav class="text-sm text-zinc-500">
      <a href="#" class="text-blue-500">डैशबोर्ड</a> / <a href="#">मेरा डैशबोर्ड</a>
    </nav>
  </div>
  <h2 class="text-2xl font-bold mb-4">पिछली बुकिंग</h2>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-zinc-200">
      <thead>
        <tr class="bg-zinc-100">
          <th class="py-2 px-4 border-b">नाम</th>
          <th class="py-2 px-4 border-b">बुकिंग आईडी</th>
          <th class="py-2 px-4 border-b">पता</th>
          <th class="py-2 px-4 border-b">फोन नंबर</th>
          <th class="py-2 px-4 border-b">काम</th>
          <th class="py-2 px-4 border-b">तारीख</th>
          <th class="py-2 px-4 border-b">रकम</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              DK
            </div>
            दीया कपूर
          </td>
          <td class="py-2 px-4 border-b">23S100005</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288003456</td>
          <td class="py-2 px-4 border-b">लकड़ी के सीढ़ी निर्माण</td>
          <td class="py-2 px-4 border-b">12/10/2023 10:00</td>
          <td class="py-2 px-4 border-b">200</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              M
            </div>
            मिशा
          </td>
          <td class="py-2 px-4 border-b">23S100089</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1276603456</td>
          <td class="py-2 px-4 border-b">वुड फर्नीचर निर्माण</td>
          <td class="py-2 px-4 border-b">22/10/2023 13:00</td>
          <td class="py-2 px-4 border-b">500</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              MB
            </div>
            मीनू भंडारी
          </td>
          <td class="py-2 px-4 border-b">23S125005</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1348003456</td>
          <td class="py-2 px-4 border-b">फ्लोरिंग काम</td>
          <td class="py-2 px-4 border-b">02/11/2023 14:00</td>
          <td class="py-2 px-4 border-b">800</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              NS
            </div>
            निहारिका शर्मा
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              AT
            </div>
            अमित त्रिपाठी
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              SG
            </div>
            संदेश गुप्ता
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
      </tbody>
    </table>
  </div>
</div></div>
  )
}

export default DashbordContent