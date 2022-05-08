package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.CompteRenduChercheurService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.CompteRendu;
import com.ird.faa.ws.rest.provided.converter.CompteRenduConverter;
import com.ird.faa.ws.rest.provided.vo.CompteRenduVo;

@Api("Manages compteRendu services")
@RestController
@RequestMapping("api/chercheur/compteRendu")
public class CompteRenduRestChercheur {

@Autowired
private CompteRenduChercheurService compteRenduService;

@Autowired
private CompteRenduConverter compteRenduConverter;


            @ApiOperation("Updates the specified  compteRendu")
            @PutMapping("/")
            public  CompteRenduVo update(@RequestBody  CompteRenduVo  compteRenduVo){
            CompteRendu compteRendu = compteRenduConverter.toItem(compteRenduVo);
            compteRendu = compteRenduService.update(compteRendu);
            return compteRenduConverter.toVo(compteRendu);
            }

    @ApiOperation("Finds a list of all compteRendus")
    @GetMapping("/")
    public List<CompteRenduVo> findAll(){
        return compteRenduConverter.toVo(compteRenduService.findAll());
    }

    @ApiOperation("Finds a compteRendu with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public CompteRenduVo findByIdWithAssociatedList(@PathVariable Long id){
    return compteRenduConverter.toVo(compteRenduService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search compteRendu by a specific criteria")
    @PostMapping("/search")
    public List<CompteRenduVo> findByCriteria(@RequestBody CompteRenduVo compteRenduVo){
        return compteRenduConverter.toVo(compteRenduService.findByCriteria(compteRenduVo));
        }

            @ApiOperation("Finds a compteRendu by id")
            @GetMapping("/id/{id}")
            public CompteRenduVo findById(@PathVariable Long id){
            return compteRenduConverter.toVo(compteRenduService.findById(id));
            }

            @ApiOperation("Saves the specified  compteRendu")
            @PostMapping("/")
            public CompteRenduVo save(@RequestBody CompteRenduVo compteRenduVo){
            CompteRendu compteRendu = compteRenduConverter.toItem(compteRenduVo);
            compteRendu = compteRenduService.save(compteRendu);
            return compteRenduConverter.toVo(compteRendu);
            }

            @ApiOperation("Delete the specified compteRendu")
            @DeleteMapping("/")
            public int delete(@RequestBody CompteRenduVo compteRenduVo){
            CompteRendu compteRendu = compteRenduConverter.toItem(compteRenduVo);
            return compteRenduService.delete(compteRendu);
            }

            @ApiOperation("Deletes a compteRendu by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return compteRenduService.deleteById(id);
            }
        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<CompteRendu> findByDossierMedicaleRef(@PathVariable String ref){
        return compteRenduService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return compteRenduService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<CompteRendu> findByDossierMedicaleId(@PathVariable Long id){
        return compteRenduService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return compteRenduService.deleteByDossierMedicaleId(id);
        }



            }
