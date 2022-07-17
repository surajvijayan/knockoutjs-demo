define(["knockout", "text!../templates/firstCompTemplate.html"], function (ko, template) 
{
	class myDataModel {
		constructor(params) {
			var quotes = [
				'“Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will.” – Jawaharlal Nehru',
				'“Politics and Religion are obsolete. The time has come for Science and Spirituality.” ― Jawaharlal Nehru',
				'“By plucking her petals, you do not gather the beauty of the flower.” – Rabindranath Tagore',
				'“If you are wealthy, be humble. Plants bend when they bear fruit.” – Sai Baba',
				'"I think, therefore I am.” – René Descartes',
				'“I measure the progress of a community by the degree of progress which women have achieved.” – B. R. Ambedkar',
				'"Tis better to have loved and lost than to have never loved at all." - Alrded Lord Tennyson',
				'"Never let the fear of striking out keep you from playing the game." - Babe Ruth',
				'"Workers of the world unite; you have nothing to lose but your chains." - Karl Marx',
				'"If we don\'t believe in freedom of expression for people we despise, we don\'t believe in it at all." - Noam Chomsky',
				'"Landlords, like all other men, love to reap where they never sowed." - Karl Marx',
				'“If you tell the truth, you don\'t have to remember anything.” ― Mark Twain',
				'“All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.”—The Buddha'
			];
			// Set up properties, etc.
			var self = this;
			self.name = ko.observable(params.name);
			self.items = ko.observableArray([]);
			self.enabled = ko.observable(params.enabled);
			ko.bindingHandlers.fadeVisible =
			{
				update: function (element, valueAccessor) {
					// On update, fade in/out using jQuery
					var shouldDisplay = valueAccessor();
					shouldDisplay ? $(element).fadeIn(1000) : 
									$(element).fadeOut(1000);
				}
			};
			self.addQuote = function () {
				self.items.push(
					{
						quote: quotes[Math.floor(Math.random() * 13)]
					});
			};
			self.delQuote = function () {
				while (self.items().length > 0) {
					self.items.pop();
				}
			};
			self.delIt = function (Quote,event) {
				var elem = event.target.closest('tr');
				$(elem).slideUp('slow',function() {
					self.items.remove(Quote)
				});
			};
		}
	};
	return { viewModel: myDataModel,template: template }
});
