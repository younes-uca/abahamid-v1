package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.DossierMedicaleTagMedecinService;

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
import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.ws.rest.provided.converter.DossierMedicaleTagConverter;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleTagVo;

@Api("Manages dossierMedicaleTag services")
@RestController
@RequestMapping("api/medecin/dossierMedicaleTag")
public class DossierMedicaleTagRestMedecin {

@Autowired
private DossierMedicaleTagMedecinService dossierMedicaleTagService;

@Autowired
private DossierMedicaleTagConverter dossierMedicaleTagConverter;


            @ApiOperation("Updates the specified  dossierMedicaleTag")
            @PutMapping("/")
            public  DossierMedicaleTagVo update(@RequestBody  DossierMedicaleTagVo  dossierMedicaleTagVo){
            DossierMedicaleTag dossierMedicaleTag = dossierMedicaleTagConverter.toItem(dossierMedicaleTagVo);
            dossierMedicaleTag = dossierMedicaleTagService.update(dossierMedicaleTag);
            return dossierMedicaleTagConverter.toVo(dossierMedicaleTag);
            }

    @ApiOperation("Finds a list of all dossierMedicaleTags")
    @GetMapping("/")
    public List<DossierMedicaleTagVo> findAll(){
        return dossierMedicaleTagConverter.toVo(dossierMedicaleTagService.findAll());
    }

    @ApiOperation("Finds a dossierMedicaleTag with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DossierMedicaleTagVo findByIdWithAssociatedList(@PathVariable Long id){
    return dossierMedicaleTagConverter.toVo(dossierMedicaleTagService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search dossierMedicaleTag by a specific criteria")
    @PostMapping("/search")
    public List<DossierMedicaleTagVo> findByCriteria(@RequestBody DossierMedicaleTagVo dossierMedicaleTagVo){
        return dossierMedicaleTagConverter.toVo(dossierMedicaleTagService.findByCriteria(dossierMedicaleTagVo));
        }

            @ApiOperation("Finds a dossierMedicaleTag by id")
            @GetMapping("/id/{id}")
            public DossierMedicaleTagVo findById(@PathVariable Long id){
            return dossierMedicaleTagConverter.toVo(dossierMedicaleTagService.findById(id));
            }

            @ApiOperation("Saves the specified  dossierMedicaleTag")
            @PostMapping("/")
            public DossierMedicaleTagVo save(@RequestBody DossierMedicaleTagVo dossierMedicaleTagVo){
            DossierMedicaleTag dossierMedicaleTag = dossierMedicaleTagConverter.toItem(dossierMedicaleTagVo);
            dossierMedicaleTag = dossierMedicaleTagService.save(dossierMedicaleTag);
            return dossierMedicaleTagConverter.toVo(dossierMedicaleTag);
            }

            @ApiOperation("Delete the specified dossierMedicaleTag")
            @DeleteMapping("/")
            public int delete(@RequestBody DossierMedicaleTagVo dossierMedicaleTagVo){
            DossierMedicaleTag dossierMedicaleTag = dossierMedicaleTagConverter.toItem(dossierMedicaleTagVo);
            return dossierMedicaleTagService.delete(dossierMedicaleTag);
            }

            @ApiOperation("Deletes a dossierMedicaleTag by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return dossierMedicaleTagService.deleteById(id);
            }
        @ApiOperation("find by tag reference")
        @GetMapping("/tag/reference/{reference}")
        public List<DossierMedicaleTag> findByTagReference(@PathVariable String reference){
        return dossierMedicaleTagService.findByTagReference(reference);
        }

        @ApiOperation("delete by tag reference")
        @DeleteMapping("/tag/reference/{reference}")
        public int deleteByTagReference(@PathVariable String reference){
        return dossierMedicaleTagService.deleteByTagReference(reference);
        }

        @ApiOperation("find by tag id")
        @GetMapping("/tag/id/{id}")
        public List<DossierMedicaleTag> findByTagId(@PathVariable Long id){
        return dossierMedicaleTagService.findByTagId(id);
        }

        @ApiOperation("delete by tag id")
        @DeleteMapping("/tag/id/{id}")
        public int deleteByTagId(@PathVariable Long id){
        return dossierMedicaleTagService.deleteByTagId(id);
        }

        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<DossierMedicaleTag> findByDossierMedicaleRef(@PathVariable String ref){
        return dossierMedicaleTagService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return dossierMedicaleTagService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<DossierMedicaleTag> findByDossierMedicaleId(@PathVariable Long id){
        return dossierMedicaleTagService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return dossierMedicaleTagService.deleteByDossierMedicaleId(id);
        }



            }
